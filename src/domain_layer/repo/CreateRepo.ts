import { LogicState } from "../../infrastructure_layer/data/logic/LogicStateType";

export let create = (): LogicState => {
    return {
        cache: {
            isUseIndexDB: false
        }
    }
}