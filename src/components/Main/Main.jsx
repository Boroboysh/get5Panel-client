import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import styles from './main.module.css';
import Home from "../Home/Home";
import AuthMiddleware from "../AuthMiddleware/AuthMiddleware";
import NewConfig from "../NewConfig/NewConfig";
import ConfigList from "../ConfigList/ConfigList";
import Config from "../Config/Config";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";

let Main = (props) => {

        if (props.cookieState === "noauth") {
            return (
                <div className={styles.wrap}>
                    <a href="http://127.0.0.1:8000/login" target="_blank" rel="noopener">Log In (Steam)</a>
                   <Routes>
                       <Route element={<AuthMiddleware cookieState={props.cookieState} setCookieState={props.setCookieState}/>} path="/auth/:token"/>
                   </Routes>
                </div>
            )
        }

        let logout = () => {
            props.setCookieState("noauth");
            alert('You not authorized')
        }


        return (
            <div className={styles.wrap}>
                <header className={styles.header}>
                    <section className={styles.header_content}>
                        <button onClick={logout}>Log out</button>
                        <h3>Header</h3>
                        <Link to="/">Go to main page</Link>
                    </section>
                </header>
                <Routes>
                    <Route element={<Home/>} path="/"/>
                    <Route element={<NewConfig/>} path="/newConfig"/>
                    <Route element={<ConfigList/>} path="/configList"/>
                    <Route element={<Config/>} path="/config/:filename"/>
                    <Route element={<Login/>} path="/login"/>
                    <Route element={<NotFound/>} path="*"/>
                </Routes>
            </div>
        )
}

export default Main;