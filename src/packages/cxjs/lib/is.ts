export type Types =
    | 'bigint'
    | 'boolean'
    | 'function'
    | 'number'
    | 'object'
    | 'string'
    | 'symbol'
    | 'undefined';

export function is<T>(variable: unknown, type: Types): variable is T {
    return typeof variable === type;
}
