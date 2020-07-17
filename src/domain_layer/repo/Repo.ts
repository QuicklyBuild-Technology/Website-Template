import { getState, setState } from "../../infrastructure_layer/data/logic/LogicStateContainerManager";
import { cacheLogicState } from "../../infrastructure_layer/data/logic/CacheLogicStateType";

export let getCache = (): cacheLogicState => {
    return getState().cache;
}

export let setCache = (cache: cacheLogicState) => {
    setState(
        {
            ...getState(),
            cache
        }
    )
}