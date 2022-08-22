import type { RealmRecord, ShadowRealmConstructor } from './type';
import type { Utils } from '.';
export declare function defineShadowRealmCtor(globalRealmRec: RealmRecord, utils: Utils): void;
export declare function createShadowRealmCtor(globalRealmRec: RealmRecord, utils: Utils): ShadowRealmConstructor;
