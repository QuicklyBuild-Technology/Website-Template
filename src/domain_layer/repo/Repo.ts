import { getState, setState } from "../../infrastructure_layer/data/logic/LogicStateContainerManager";
import { CacheLogicState } from "../../infrastructure_layer/data/logic/CacheLogicStateType";

export let getCache = (): CacheLogicState => {
    return getState().cache;
}

export let setCache = (cache: CacheLogicState) => {
    setState(
        {
            ...getState(),
            cache
        }
    )
}