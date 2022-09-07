import React, {useState} from "react";
import styles from "./register.module.css"
import axios from "axios";
import {Link} from "react-router-dom";

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            "steamid": "",
            "nickname": "",
            "password": "",
            "avatar": "",
            "currentTeam": "",
        }

        this.changeInput = this.changeInput.bind(this)
        this.createNewUser = this.createNewUser.bind(this);
    }

    changeInput(e) {
        let name = e.target.name;
        let value = e.target.value;

        this.setState({
            [name]: value
        })


    }

    async createNewUser() {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        }

        let jsonState = JSON.stringify(this.state)

        console.log(this.state)

        await axios.post('http://127.0.0.1:8000/register', jsonState, config)
            .then((response) => {
                console.log(response)
            })
    }

    render() {
        return (
            <div className={styles.wrap}>
                <h2>Register page</h2>
                <div className={styles.form}>
                    <input onChange={this.changeInput} name="steamid" placeholder="Steamid" type="text"/>
                    <input onChange={this.changeInput} name="nickname" placeholder="Nickname" type="text"/>
                    <input onChange={this.changeInput} name="password" placeholder="Password" type="password"/>
                    <input onChange={this.changeInput} name="avatar" placeholder="Avatar (url)" type="text"/>
                    <input onChange={this.changeInput} name="currentTeam" placeholder="Current Team" type="text"/>
                    <input type="button" onClick={this.createNewUser} value="Зарегистрировться"/>
                </div>
                <Link to="/login">Уже зарегистрированы?</Link>
            </div>
        )
    }
}

export default Register;
