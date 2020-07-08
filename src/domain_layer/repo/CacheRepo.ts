import { getCache, setCache } from "./Repo"

export let getIsUseIndexDB = () => {
    return getCache().isUseIndexDB;
}

export let setIsUseIndexDB = (isUseIndexDB) => {
    setCache(
        {
            ...getCache(),
            isUseIndexDB
        }
    )
}