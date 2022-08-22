export declare type Intrinsics = Omit<typeof window, 'globalThis'> & {
    globalThis: GlobalObject;
};
export declare type GlobalObject = Omit<typeof window, 'globalThis'> & {
    globalThis: GlobalObject;
    ShadowRealm: ShadowRealmConstructor;
    __import(specifier: string, base?: string): Promise<Record<string, any>>;
};
export interface ShadowRealmConstructor {
    new (): ShadowRealm;
    __debug: boolean;
}
declare type Primitive = undefined | null | boolean | number | string | symbol | bigint;
declare type Callable = Function;
export interface ShadowRealm {
    evaluate(sourceText: string): Primitive | Callable;
    importValue(specifier: string, bindingName: string): Promise<Primitive | Callable>;
}
export interface BuiltinShadowRealm extends ShadowRealm {
    readonly __realm: RealmRecord;
}
export interface RealmRecord {
    intrinsics: GlobalObject;
    globalObject: GlobalObject;
    evalInContext: (x: string) => any;
}
export interface Module {
    exports: object;
    promise?: Promise<string>;
}
export {};
