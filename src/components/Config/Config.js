import React, {useEffect, useState} from "react";
import styles from './config.module.css';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

let Config = () => {
    let [status, setStatus] = useState("");
    let [isFetching, setFetching] = useState(false)

    let {filename} = useParams();

    useEffect(() => {
        axios.get(`http://192.168.0.107:8000/rcon/currentMatch`)
            .then((response) => {
                setStatus(response.data)
            })
    })

    async function startMatch () {
        setFetching(true)

        axios.get(`http://192.168.0.107:8000/rcon/start/${filename}`)
            .then((response) => {
                alert(response.data)
                setFetching(false)
            })
    }

    async function endMatch () {
        setFetching(true)

        axios.get(`http://192.168.0.107:8000/rcon/end`)
            .then((response) => {
                alert(response.data)
                setFetching(false)
            })
    }

    return (
        <div>
            <Link to="/configList">Back</Link>
            <h3>Config</h3>
            <section className={styles.wrap}>
                <div>
                    Filename: {filename}
                </div>
                <div>
                    Статус: {status === filename ? <span className={styles.active}>Запущен</span> : <span className={styles.inactive}>Не запущен</span>}
                    {status === "" ? <div className={styles.loading}>Загрузка...</div> : null}
                </div>
                <button onClick={startMatch}>Start Match</button>
                <button onClick={endMatch}>End Match</button>

                {isFetching === true ? <div className={styles.loading}>Загрузка...</div> : null}
            </section>
        </div>
    )
}

/*class ConfigContainer extends React.Component {
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