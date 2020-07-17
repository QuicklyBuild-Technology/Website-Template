import { compiler, framework } from "../store_type/HeaderStoreType";

export const HEADER_SET_COMPILER = "HEADER_SET_COMPILER";
export const HEADER_SET_FRAMEWORK = "HEADER_SET_FRAMEWORK";

export interface setCompiler {
    type: typeof HEADER_SET_COMPILER,
    compiler: compiler
}

export interface setFramework {
    type: typeof HEADER_SET_FRAMEWORK,
    framework: framework
}

export type headerAction = setCompiler | setFramework;