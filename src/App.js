import './App.css';
import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import NewConfig from "./components/NewConfig/NewConfig";
import NotFound from "./components/NotFound/NotFound";
import ConfigList from "./components/ConfigList/ConfigList";
import Config from "./components/Config/Config";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h3>Header</h3>
                <Link to="/">Go to main page</Link>
            </header>
            <div>
                <Routes>
                    <Route element={<Home/>} path="/" />
                    <Route element={<NewConfig/>} path="/newConfig"/>
                    <Route element={<NotFound/>} path="*"/>
                    <Route element={<ConfigList/>} path="/configList" />
                    <Route element={<Config/>} path="/config/:filename" />
                </Routes>
            </div>
        </div>
    );
}

export default App;
