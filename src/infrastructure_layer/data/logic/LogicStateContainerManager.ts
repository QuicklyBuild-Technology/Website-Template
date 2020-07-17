import { logicStateContainer } from "./LogicStateContainer"
import { logicState } from "./LogicStateType"

export let getState = () => {
    return logicStateContainer.state
}

export let setState = (state: logicState) => {
    logicStateContainer.state = state;
}