import React from "react";
import styles from "./login.module.css"
import axios from "axios";
import {Link} from "react-router-dom";

let Login = () => {
    return (
        <div className={styles.wrap}>
            <h2>Login Page</h2>
            <div className={styles.form}>
                <input placeholder="Nickname" type="text"/>
                <input placeholder="Password" type="password"/>
                <input type="button" value="Войти"/>
            </div>
            <Link to="/register">Ещё не зарегистрированы?</Link>
        </div>
    )
}

export default Login;
