import * as helpers from './helpers';
import { addEsModuleHelpers } from './es-module';
import { createRealmRecord } from './RealmRecord';
import { createShadowRealmCtor, defineShadowRealmCtor } from './ShadowRealm';
import { transformEsmSyntax } from './es-module/helpers';
export declare const utils: {
    addEsModuleHelpers: typeof addEsModuleHelpers;
    createRealmRecord: typeof createRealmRecord;
    createShadowRealmCtor: typeof createShadowRealmCtor;
    defineShadowRealmCtor: typeof defineShadowRealmCtor;
    dynamicImportPattern: RegExp;
    dynamicImportReplacer: string;
    transformEsmSyntax: typeof transformEsmSyntax;
} & typeof helpers;
export declare type Utils = typeof utils;
declare const _default: import("./type").ShadowRealmConstructor;
export default _default;
