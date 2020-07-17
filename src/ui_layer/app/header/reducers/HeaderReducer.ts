import { headerStore } from "../store_type/HeaderStoreType";
import { HEADER_SET_COMPILER, HEADER_SET_FRAMEWORK, headerAction } from "../actions/HeaderActionType";

export let HeaderReducer = (state: headerStore = {
    compiler: "TypeScript",
    framework: "React"
}, action: headerAction): headerStore => {
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