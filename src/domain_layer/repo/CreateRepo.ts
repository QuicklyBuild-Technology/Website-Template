import { logicState } from "../../infrastructure_layer/data/logic/LogicStateType";

export let create = (): logicState => {
    return {
        cache: {
            isUseIndexDB: false
        }
    }
}