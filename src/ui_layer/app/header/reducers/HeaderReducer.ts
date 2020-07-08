import { HeaderStore } from "../store_type/HeaderStoreType";
import { HEADER_SET_COMPILER, HEADER_SET_FRAMEWORK, HeaderAction } from "../actions/HeaderActionType";

export let HeaderReducer = (state: HeaderStore = {
    compiler: "TypeScript",
    framework: "React"
}, action: HeaderAction): HeaderStore => {
    switch (action.type) {
        case HEADER_SET_COMPILER:
            return {
                ...state,
                compiler: action.compiler
            }
        case HEADER_SET_FRAMEWORK:
            return {
                ...state,
                framework: action.framework
            }
        default:
            return state
    }
};