import React from "react";
import styles from "./newconfig.module.css"
import axios from "axios";

let NewConfig = () => {
    let jsonState = {
        name: "Andrey",
        age: 32
    }

    async function createNewConfig() {
        let config = {
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        }

        let testJson = JSON.stringify(jsonState);
        console.log(testJson)

       await axios.post('http://127.0.0.1:8000/config/new', testJson, config)
           .then((response) => {
               console.log(response)
           })
    }

    return (
        <div className={styles.wrap}>
            <header className={styles.wrap_header}>
                <h2>Создание нового конфига</h2>
            </header>
            <section className={styles.wrapper}>
                {/*method="post" action="http://127.0.0.1:8000/config/new"*/}
                <form  className={styles.formConfiig}>
                    <input name="matchid" placeholder="matchid" type="text"/>
                    <input name="num_maps" placeholder="num_maps" type="text"/>
                    <input name="spectators" placeholder="spectators" type="text"/>
                    <input name="skip_veto" placeholder="skip_veto" type="text"/>
                    <input name="veto_first" placeholder="veto_first" type="text"/>
                    <input name="side_type" placeholder="side_type" type="text"/>
                    <div>
                        <h2>Map list</h2>
                        <div>
                            <input name="de_dust2" type="checkbox"/>
                            <span>de_dust2</span>
                        </div>
                        <div>
                            <input name="de_inferno" type="checkbox"/>
                            <span>de_inferno</span>
                        </div>
                        <div>
                            <input name="de_mirage" type="checkbox"/>
                            <span>de_mirage</span>
                        </div>
                        <div>
                            <input name="de_nuke" type="checkbox"/>
                            <span>de_nuke</span>
                        </div>
                        <div>
                            <input name="de_overpass" type="checkbox"/>
                            <span>de_overpass</span>
                        </div>
                        <div>
                            <input name="de_train" type="checkbox"/>
                            <span>de_train</span>
                        </div>
                    </div>
                    <input name="players_per_team" placeholder="players_per_team" type="text"/>
                    <input name="coaches_per_team" placeholder="coaches_per_team" type="text"/>
                    <input name="min_players_to_ready" placeholder="min_players_to_ready" type="text"/>
                    <input name="mit_spectators_to_ready" placeholder="mit_spectators_to_ready" type="text"/>
                    <div>
                        <h2>Team 1</h2>
                        <input name="team1" placeholder="name" type="text"/>
                        <div>
                            <h3>Players:</h3>
                        </div>
                    </div>
                    <div>
                        <h2>Team 2</h2>
                        <input name="team2" placeholder="name" type="text"/>
                        <div>
                            <h3>Players:</h3>
                        </div>
                    </div>

                </form>
                <input onClick={createNewConfig} type="button" value="create cfg"/>
            </section>
        </div>
    );
}

export default NewConfig;
