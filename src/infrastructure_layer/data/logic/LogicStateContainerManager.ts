import { logicStateContainer } from "./LogicStateContainer"
import { LogicState } from "./LogicStateType"

export let getState = () => {
    return logicStateContainer.state
}

export let setState = (state: LogicState) => {
    logicStateContainer.state = state;
}