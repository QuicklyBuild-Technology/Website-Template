import * as React from "react";
import { store } from "../../../../infrastructure_layer/data/store/StoreType";
import { headerStore } from "../store_type/HeaderStoreType";
import { useSelector, useDispatch } from "react-redux";
import { setCompiler, setFramework } from "../actions/headerAction";
import { useEffectExecOnlyOnce } from "../../../utils/CustomHookUtils";
import { useIndexDB, isUseIndexDB } from "../../../../application_layer/logic_service/CacheApService";
import { Map, List } from "immutable";
import { curry, flow } from "lodash";
import { just } from "most";
import * as styles from "./header.module.scss";
import "./header.scss";

let headerSelector = ({ header }: store) => header;

let Header = () => {
    let dispatch = useDispatch();
    let { compiler, framework }: headerStore = useSelector(headerSelector);


    useEffectExecOnlyOnce(() => {
        just(1).map(v => v + 1)
            .subscribe({
                "next": (v) => {
                    console.log("most v:", v)
                },
                "error": (e) => {
                    console.error(e);
                },
                "complete": () => {
                    console.log("most complete!")
                }
            })
    });

    useEffectExecOnlyOnce(() => {
        console.log(isUseIndexDB());
        useIndexDB();
        console.log(isUseIndexDB());
    });


    useEffectExecOnlyOnce(() => {
        console.log(Map().set("list", List([1])).get("list"));

        let aa = (a, b) => a + b;
        let bb = (b) => b + 2;

        let cc = flow([
            curry(aa)(0.1),
            bb
        ]);
        console.log(cc(1.0));
    })

    return <section>
        <h1 className={styles.test}>Hello from {compiler} and {framework}!</h1>
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

export default Header