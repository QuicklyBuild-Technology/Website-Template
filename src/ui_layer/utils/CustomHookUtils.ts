//@ts-check
import { useEffect } from "react"

export let useEffectExecOnlyOnce = (func) => {
    useEffect(func, []);
}