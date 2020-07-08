import { compiler, framework } from "../state_type/HeaderStateType";

export const HEADER_SET_COMPILER = "HEADER_SET_COMPILER";
export const HEADER_SET_FRAMEWORK = "HEADER_SET_FRAMEWORK";

export interface SetCompiler {
    type: typeof HEADER_SET_COMPILER,
    compiler: compiler
}

export interface SetFramework {
    type: typeof HEADER_SET_FRAMEWORK,
    framework: framework
}

export type HeaderAction = SetCompiler | SetFramework;