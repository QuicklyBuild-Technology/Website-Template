import { compiler, framework } from "../store_type/HeaderStoreType"
import { setCompiler as setCompilerType, HEADER_SET_COMPILER, setFramework as setFrameworkType, HEADER_SET_FRAMEWORK } from "./HeaderActionType"

export let setCompiler = (compiler: compiler): setCompilerType => {
    return {
        type: HEADER_SET_COMPILER,
        compiler
    }
}

export let setFramework = (framework: framework): setFrameworkType => {
    return {
        type: HEADER_SET_FRAMEWORK,
        framework
    }
}