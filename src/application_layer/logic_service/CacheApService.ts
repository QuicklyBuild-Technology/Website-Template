import * as CacheDoService from "../../domain_layer/domain/cache/cache/CacheDoService"

export let useIndexDB = () => {
    CacheDoService.useIndexDB();
}


export let isUseIndexDB = () => {
    return CacheDoService.isUseIndexDB();
}