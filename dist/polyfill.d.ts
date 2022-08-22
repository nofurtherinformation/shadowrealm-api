import type { ShadowRealmConstructor } from './type';
declare global {
    interface Window {
        ShadowRealm: ShadowRealmConstructor;
    }
    var ShadowRealm: ShadowRealmConstructor;
}
