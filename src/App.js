import './App.css';
import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import NewConfig from "./components/NewConfig/NewConfig";
import NotFound from "./components/NotFound/NotFound";
import ConfigList from "./components/ConfigList/ConfigList";
import Config from "./components/Config/Config";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

const App = () => {
    return (
        <div className="App">
            <section className="app-login">
                <Link to="/login"> Войти </Link>
                /
                <Link to="/register"> Зарегистрироваться </Link>
            </section>
            <header className="App-header">
                <section className="header-content">
                    <h3>Header</h3>
                    <Link to="/">Go to main page</Link>
                </section>
            </header>

            <div>
                <Routes>
                    <Route element={<Home/>} path="/"/>
                    <Route element={<NewConfig/>} path="/newConfig"/>
                    <Route element={<NotFound/>} path="*"/>
                    <Route element={<ConfigList/>} path="/configList"/>
                    <Route element={<Config/>} path="/config/:filename"/>
                    <Route element={<Login/>} path="/login"/>
                    <Route element={<Register/>} path="/register"/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
