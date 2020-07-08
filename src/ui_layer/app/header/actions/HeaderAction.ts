import { compiler, framework } from "../store_type/HeaderStoreType"
import { SetCompiler, HEADER_SET_COMPILER, SetFramework, HEADER_SET_FRAMEWORK } from "./HeaderActionType"

export let setCompiler = (compiler: compiler): SetCompiler => {
    return {
        type: HEADER_SET_COMPILER,
        compiler
    }
}

export let setFramework = (framework: framework): SetFramework => {
    return {
        type: HEADER_SET_FRAMEWORK,
        framework
    }
}