import { setIsUseIndexDB, getIsUseIndexDB } from "../../../repo/CacheRepo"

export let useIndexDB = () => {
    setIsUseIndexDB(true);
}


export let isUseIndexDB = () => {
    return getIsUseIndexDB() === true;
}