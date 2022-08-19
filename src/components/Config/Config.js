import React, {useState} from "react";
import styles from './config.module.css';
import axios from "axios";
import {useParams} from "react-router-dom";


let Config = () => {
    let [status, setStatus] = useState("");

    let {filename} = useParams();

/*    async function getCurrentConfig() {
        axios.get(`http://192.168.0.107:8000/configList/${filename}`)
            .then((response) => {
                console.log(response.data)

                console.log('Заебись ' + {filename})
            })
    }*/

    async function startMatch () {
        axios.get(`http://192.168.0.107:8000/rcon/start/${filename}`)
            .then((response) => {
                console.log(response.data)
            })
    }

    async function endMatch () {
        axios.get(`http://192.168.0.107:8000/rcon/end`)
            .then((response) => {
                console.log(response.data)
            })
    }

    async function getStatusServer () {
        axios.get(`http://192.168.0.107:8000/rcon/status`)
            .then((response) => {
                console.log(response.data)
                let data = "";

                data = JSON.parse(response.data);

                setStatus(data)
            })
    }

    return (
        <div>
            <h3>Config</h3>
            <section className={styles.wrap}>
                <div>
                    Filename: {filename}
                </div>
                <button onClick={startMatch}>Start Match</button>
                <button onClick={endMatch}>End Match</button>
                <button onClick={getStatusServer}>Get Status</button>
                <div>
                    {status}
                </div>
            </section>
        </div>
    )
}

/*class Config extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            configName: "ass"
        };

        this.getCurrentConfig = this.getCurrentConfig.bind(this)
    }



    async getCurrentConfig() {
        /!*this.props.history.push(`/config/${filename}`)*!/
        console.log(this.props.filename)


        axios.get(`http://192.168.0.107:8000/configList/${this.props.filename}`)
            .then((response) => {
                console.log(response.data)

                console.log('Заебись')
            })
    }

    render() {
        return (
            <div>
                <h3>Config</h3>
                <section className={styles.wrap}>
                    <div>
                        Filename: {this.state.configName}
                    </div>
                    <button onClick={this.getCurrentConfig}>Get config</button>
                </section>
            </div>
        );
    }
}*/

export default  Config;