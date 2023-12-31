export function isNonNullable<T>(val: T): val is NonNullable<T> {
    return val !== null && val !== undefined;
}
