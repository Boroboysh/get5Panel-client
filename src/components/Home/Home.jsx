import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import styles from './loggedin.module.css';
import Home from "../Home/Home";
import AuthMiddleware from "../AuthMiddleware/AuthMiddleware";
import NewConfig from "../NewConfig/NewConfig";
import ConfigList from "../ConfigList/ConfigList";
import Config from "../Config/Config";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";

let IsLoggedIn = (props) => {
    let logOut = () => {
        localStorage.clear();
        props.setIsLogged(false)
    }

    return (
        <div className={styles.wrap}>
            <header className={styles.header}>
                <section className={styles.header_content}>
                    <button onClick={logOut}>Log out</button>
                    <h3>Header</h3>
                    <Link to="/">Go to main page</Link>
                </section>
            </header>
            <Routes>
                <Route element={<Home/>} path="/"/>
                <Route element={<AuthMiddleware/>} path="/auth/:token"/>

                <Route element={<NewConfig/>} path="/newConfig"/>
                <Route element={<ConfigList/>} path="/configList"/>
                <Route element={<Config/>} path="/config/:filename"/>

                <Route element={<Login/>} path="/login"/>

                <Route element={<NotFound/>} path="*"/>
                {/*<Route path="/redirectToLogin" element={ <Navigate to='/configList'/>}/>*/}
            </Routes>
        </div>
    )
}

export default IsLoggedIn;