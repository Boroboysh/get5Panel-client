import React from "react";
import {Link, useParams} from "react-router-dom";

let AuthMiddleware = (props) => {
    let token = useParams();

    if (token) {
        props.setCookieState("auth")
        alert('You authorized')
    }

}

export default AuthMiddleware;