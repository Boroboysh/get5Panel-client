import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import NewConfig from "./components/NewConfig/NewConfig";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h3>Header</h3>
            </header>
            <div>
                <Routes>
                    <Route element={<Home/>} path="/" />
                    <Route element={<NewConfig/>} path="/newConfig"/>
                    <Route element={<NotFound/>} path="*"/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
