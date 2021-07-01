import React from 'react';
import ReactDom from 'react-dom';
import "core-js/stable";
import "regenerator-runtime/runtime";
import "./styles/main.sass";
import Search from './components/Search';

export default function App() {
    return(
        <Search/>
    )
}

ReactDom.render(<App />, document.getElementById("app"));

if (module.hot) {
    module.hot.accept()
}