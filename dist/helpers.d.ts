import type { GlobalObject, RealmRecord } from './type';
import type { Utils } from '.';
export declare const GLOBAL: GlobalObject;
export declare const define: <T>(o: T, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>) => T;
export declare const _: {
    debug: boolean;
};
export declare function log(msg: any): void;
export declare let apply: typeof Reflect['apply'];
export declare function replace(str: string, ...args: [
    string | RegExp,
    string | ((substring: string, ...args: any[]) => string)
]): any;
export declare function isObject(val: any): val is Record<PropertyKey, any>;
export declare let assign: {
    <T, U>(target: T, source: U): T & U;
    <T_1, U_1, V>(target: T_1, source1: U_1, source2: V): T_1 & U_1 & V;
    <T_2, U_2, V_1, W>(target: T_2, source1: U_2, source2: V_1, source3: W): T_2 & U_2 & V_1 & W;
    (target: object, ...sources: any[]): any;
}, keys: {
    (o: object): string[];
    (o: {}): string[];
};
export declare function wrapError(reason: any, { intrinsics }: RealmRecord, captured?: boolean): Error;
export declare function getWrappedValue<T>(callerRealm: RealmRecord, value: T, valueRealm: RealmRecord, utils: Utils): T;
export declare const globalReservedProps: readonly ["globalThis", "Infinity", "NaN", "undefined", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "Error", "EvalError", "FinalizationRegistry", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Number", "Object", "Promise", "Proxy", "RangeError", "ReferenceError", "RegExp", "Set", "SharedArrayBuffer", "String", "Symbol", "SyntaxError", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "URIError", "WeakMap", "WeakRef", "WeakSet", "Atomics", "JSON", "Math", "Reflect", "console"];
