import * as React from "react";
import { Store } from "../../../../infrastructure_layer/data/store/StoreType";
import { HeaderStore } from "../store_type/HeaderStoreType";
import { useSelector, useDispatch } from "react-redux";
import { setCompiler, setFramework } from "../actions/HeaderAction";
import { useEffectExecOnlyOnce } from "../../../utils/CustomHookUtils";
import { useIndexDB, isUseIndexDB } from "../../../../application_layer/logic_service/CacheApService";
import { Map, List } from "immutable";

let headerSelector = ({ header }: Store) => header;

export let Header = () => {
    let dispatch = useDispatch();
    let { compiler, framework }: HeaderStore = useSelector(headerSelector);

    useEffectExecOnlyOnce(() => {
        console.log(isUseIndexDB());
        useIndexDB();
        console.log(isUseIndexDB());
    });

    useEffectExecOnlyOnce(() => {
        console.log(Map().set("list", List([1])).get("list"));
    })

    return <section>
        <h1>Hello from {compiler} and {framework}!</h1>
        <button onClick={
            () => {
                dispatch(setCompiler("Reason"))
            }
        }>Use Reason Compiler</button>
        <button onClick={
            () => {
                dispatch(setFramework("Redux"))
            }
        }>Use Redux Framework</button>
    </section>
}
