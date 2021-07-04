import React from 'react';
import ReactDom from 'react-dom';
import "core-js/stable";
import "regenerator-runtime/runtime";
import "./styles/main.sass";
import Search from './components/Search';

import { SearchProvider } from "./context/SearchContext"

export default function App() {
    return (
        <SearchProvider>
            <Search />
        </SearchProvider>
    )
}

ReactDom.render(<App />, document.getElementById("app"));

if (module.hot) {
    module.hot.accept()
}