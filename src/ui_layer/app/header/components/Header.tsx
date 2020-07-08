import * as React from "react";
import { Store } from "../../../../infrastructure_layer/data/store/StoreType";
import { HeaderState } from "../state_type/HeaderStateType";
import { useSelector, useDispatch } from "react-redux";
import { setCompiler, setFramework } from "../actions/HeaderAction";

let headerSelector = ({ header }: Store) => header;

export let Header = () => {
    let dispatch = useDispatch();
    let { compiler, framework }: HeaderState = useSelector(headerSelector);

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
