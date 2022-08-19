import React from "react";
import {Link} from "react-router-dom";
import styles from './home.module.css';

let Home = () => {
    return (
        <div>
            <h3>Home Page</h3>
            <section className={styles.wrap}>
                <Link to="/newConfig">Create New Config</Link>
                <Link to="/configList">My configs</Link>
            </section>
        </div>
    );
}

export default Home;