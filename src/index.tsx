import * as React from "react";
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Header } from "./ui_layer/app/header/components/Header";
import { rootReducer } from "./ui_layer/reducer/all_reducer";

const store = createStore(rootReducer)

render(
    <Provider store={store}>
        <Header />
    </Provider>,
    document.getElementById('root')
)