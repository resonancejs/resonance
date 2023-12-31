import { Observable, tap } from 'rxjs';
import {
    Server as SecureServer,
    createServer as createSecureServer,
} from 'https';
import { Server, createServer } from 'http';

import { ResonanceConfig } from './application_config';
import { Class } from './interface/class';
import {
    $bootstrapped,
    $routesInitialized,
    $serverInitialized,
} from './application_lifecycle';
import { NcLogger, green } from './log';
import { getClassName } from './util';
import { NcRouter } from './router/router';
import { Module, ModuleCatalog } from './di/module';
import { module_ref } from './di';
import { Request, Response } from 'express';

const console = new NcLogger('ResonanceApp');

export class Resonance {
    public appRef!: Module;

    public appServer?: Server | SecureServer;
    public router!: NcRouter;

    constructor(private _config: ResonanceConfig) {}

    boostrap(rootAppModule: Class<module_ref>) {
        this._initializeRootModule(rootAppModule);
        $bootstrapped.next(true);
        $bootstrapped.complete();

        this._resolveRoutes();
        $routesInitialized.next(true);
        $routesInitialized.complete();

        return this._initializeServer().pipe(
            tap(() => {
                $serverInitialized.next(true);
                $serverInitialized.complete();
            })
        );
    }

    private _initializeRootModule(appModule: Class<module_ref>) {
        const rootModuleName = getClassName(appModule);

        const appRef = ModuleCatalog.get(rootModuleName);

        if (appRef === undefined) {
            throw new Error(
                `Failed to initialize Resonance app root module ${rootModuleName}. Are you sure you provided the root module  bootstrap?`
            );
        }

        this.appRef = appRef;
    }

    private _applicationRoutes: string[] = [];

    private _resolveRoutes(modules?: Map<string, Module>) {
        this.router = new NcRouter(this.appRef.baseURL);

        (modules ?? this.appRef.imports).forEach((ncModule: Module) => {
            ncModule.routes.forEach((route) => {
                this._applicationRoutes.push(route.name);
            });

            if (Object.keys(ncModule.imports).length > 0) {
                this._resolveRoutes(ncModule.imports);
            }
        });
    }

    private _initializeServer() {
        return new Observable<string>((observer) => {
            const callback = () => {
                observer.next(
                    green(
                        'Resonance is listening on port ' +
                            this._config.port +
                            '.'
                    )
                );
                observer.complete();
            };

            this.router.initializeRoutes(this._applicationRoutes);

            this.router.appExpress.get(
                '/api',
                // @ts-ignore
                (req: Request, res: Response) => {
                    res.status(200).write(
                        JSON.stringify({
                            welcome: 'to Jurassic Park.',
                            i_mean: 'Resonance.',
                            welcome_to: 'Resonance.',
                        })
                    );
                    res.end();
                }
            );

            const server = this._config.credentials
                ? createSecureServer(this.router.appExpress)
                : createServer(this.router.appExpress);

            this.appServer =
                this._config.backlog !== undefined
                    ? server.listen(
                          this._config.port,
                          this._config.hostname ?? 'localhost',
                          this._config.backlog,
                          () => callback()
                      )
                    : server.listen(
                          this._config.port,
                          this._config.hostname ?? 'localhost',
                          () => callback()
                      );
        }).pipe(
            tap((msg) => {
                console.log(msg);
            })
        );
    }

    public exit() {
        return new Observable<string>((observer) => {
            if (this.appServer)
                this.appServer.close((err) => {
                    if (err) {
                        observer.error(err);
                    } else {
                        this.appServer?.closeAllConnections();
                        observer.next(
                            'Resonance exited for connection on port ' +
                                this._config.port
                        );
                        observer.complete();
                    }
                });
            else {
                observer.error(
                    'Failed to exit Resonance, as it was never started.'
                );
            }
        });
    }
}
