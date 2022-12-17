import './App.css';
import React, {useState} from "react";
import Main from "./components/Main/Main";

let App = () => {
        let [cookieState,setCookieState] = useState('noauth')

        return (
            <Main cookieState={cookieState} setCookieState={setCookieState}/>
        );
}

export default App;

