import React from "react";
import styles from "./login.module.css";

let Login = () => {
    return (
        <div className={styles.wrap}>
            <a href="http://127.0.0.1:8000/login" target="_blank" rel="noopener">Log In (Steam)</a>
        </div>
    )
}

export default Login;

