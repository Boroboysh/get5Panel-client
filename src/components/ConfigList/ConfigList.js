import React from "react";
import styles from './configlist.module.css';
import axios from "axios";
import {Link} from "react-router-dom";

class ConfigList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            configs: []
        };
    }

    componentDidMount() {
        axios.get('http://192.168.0.107:8000/configList')
            .then((response) => {
                console.log(response.data)
                this.setState({
                    configs: response.data
                })

                console.log(`Хуета: ${this.state}`)
            })
    }

    render() {
        return (
            <div>
                <h3>Config list</h3>
                <section className={styles.wrap}>
                    <div>
                        {this.state.configs.map(el => {
                            el = el.replace(".json", "")

                            return<div> <Link to={"/config/" + el}> {el} </Link> </div>
                        })}
                    </div>
                </section>
            </div>
        );
    }
}

export default ConfigList;