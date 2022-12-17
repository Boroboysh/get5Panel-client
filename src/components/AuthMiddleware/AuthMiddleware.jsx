import React, {useEffect} from "react";
import styles from './authMiddleware.module.css';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

let AuthMiddleware = (props) => {
    const params = useParams();
    let token = JSON.parse(params.token);
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    }

    localStorage.setItem('api_token', token.remember_token);

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/auth', localStorage.getItem('api_token'), config)

    })

    let changeState = () => {
        if (token.remember_token) {
            props.setIsLogged(true)
        }
        console.log(token.remember_token)
    }

    return (
        <div>
            <section className={styles.login}>
                {
                    token.remember_token ? <div><Link to="/" onClick={changeState}>Back to main page</Link>
                        <div>You authorized</div>
                    </div> : <div>You not authorized</div>
                }

            </section>
        </div>
    )
}

export default AuthMiddleware;