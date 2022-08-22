/**
 * Syntax:
 *   import("module-name");  =>  __import("module-name");
 */
export declare const dynamicImportPattern: RegExp;
export declare const dynamicImportReplacer = "$1__$2";
export declare function transformEsmSyntax(sourceText: string): readonly [string, string[]];
