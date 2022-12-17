import React from "react";
import styles from "./newconfig.module.css"
import axios from "axios";

class NewConfig extends React.Component {
    constructor(props) {
        super(props);

        /*    this.state = {
                "matchid": "example_match",
                "num_maps": 3,
                "players_per_team": 5,
                "coaches_per_team": 2,
                "min_players_to_ready": 1,
                "min_spectators_to_ready": 0,
                "skip_veto": false,
                "veto_first": "team1",
                "side_type": "standard",

                "spectators": {
                    "players":
                        [
                            "STEAM_1:1:.....",
                            "STEAM_1:1:....."
                        ]
                },

                "maplist": [],
                "favored_percentage_team1": 65,
                "favored_percentage_text": "HLTV Bets",

                "team1": {
                    "name": "EnvyUs",
                    "tag": "EnvyUs",
                    "flag": "FR",
                    "logo": "nv",
                    "players": []
                },
                "team2": {
                    "name": "Fnatic",
                    "tag": "Fnatic",
                    "flag": "SE",
                    "logo": "fntc",
                    "players": []
                },

                "cvars": {
                    "hostname": "Match server #1"
                }
            }*/

        this.state = {
            "matchid": "",
            "num_maps": 0,
            "maplist": [],
            "team1": {
                "name": "",
                "players": []
            },
            "team2": {
                "name": "",
                "players": []
            },
        }
        this.createNewConfig = this.createNewConfig.bind(this);
        this.inputConfigChange = this.inputConfigChange.bind(this);
    }

    inputConfigChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        this.setState({
            [name]: value
        })
    }

    checkboxMapConfigChange = (e) => {
        let maplist = this.state.maplist

        if (e.target.checked) {
            maplist.push(e.target.name)
        }
        else {
            maplist = maplist.filter(i => i !== e.target.name)
        }

        this.setState({
            maplist: maplist
        })
    }

    selectConfigChange = (e) => {
        let value = parseInt(e.target.value);

        if (isNaN(value)) {
            this.setState({
                [e.target.name]: e.target.value
            })
        } else {
            this.setState({
                [e.target.name]: value
            })
        }


    }

    playersConfigChange = (e) => {
        let player = e.target.value;

        if (player.length < 8) {
            return;
        } else {
            if (e.target.placeholder === "steamid_team1") {
                let players = this.state.team1.players;
                players.push(player);

                this.setState({
                    team1: {...this.state.team1, players: players}
                })
            } else {
                let players = this.state.team2.players;
                players.push(player);

                this.setState({
                    team2: {...this.state.team2, players: players}
                })

            }
        }
    }

    teamConfigChange = (e) => {
        if (e.target.name === "team1") {
            this.setState({
                team1: {...this.state.team1, [e.target.placeholder]: e.target.value}
            })
        } else {
            this.setState({
                team2: {...this.state.team2, [e.target.placeholder]: e.target.value}
            })
        }

        console.log(this.state)
    }

    async createNewConfig() {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        }

        let jsonState = JSON.stringify(this.state);
        console.log(this.state)

        if (this.state.maplist.length !== this.state.num_maps) {
            alert('Num maps does not correspond maplist')
        } else {
            await axios.post('http://127.0.0.1:8000/config/new', jsonState, config)
                .then((response) => {
                    console.log(response)
                    alert('Усешно! Конфиг создан. Название файла: ' + this.state.matchid + '.json')
                })
        }
    }

    render() {
        return (
            <div className={styles.wrap}>
                <header className={styles.wrap_header}>
                    <h2>Создание нового конфига</h2>
                </header>
                <section className={styles.wrapper}>
                    <form className={styles.formConfig}>
                        <input id={styles.matchid} onChange={this.inputConfigChange} name="matchid" placeholder="matchid" type="text"/>
                        <input onChange={this.inputConfigChange} name="spectators" placeholder="spectators"
                               type="text"/>
                        <div className={styles.skip_veto}>
                            <p>skip_veto</p>
                            <select name="skip_veto">
                                <option value={true}>true</option>
                                <option value={false}>false</option>
                            </select>
                        </div>
                        <div className={styles.syde_type}>
                            <p>side type </p>
                            <select onChange={this.inputConfigChange} name="side_type">
                                <option value="standard">standard</option>
                                <option value="always_knife">always_knife</option>
                                <option value="never_knife">never_knife</option>
                            </select>
                        </div>
                        <div className={styles.veto_first}>
                            <p>veto_first</p>
                            <select onChange={this.selectConfigChange} name="veto_first">
                                <option value="team1">team1</option>
                                <option value="team2">team2</option>
                            </select>
                        </div>
                        <div className={styles.formConfig_num_maps}>
                            <p>Num maps</p>
                            <select onChange={this.selectConfigChange} name="num_maps">
                                <option value="3">BL 3</option>
                                <option value="5">BL 5</option>
                                <option value="7">BL 7</option>
                            </select>
                        </div>
                        <div className={styles.maplist}>
                            <h2>Map list</h2>
                            <div>
                                <input onChange={this.checkboxMapConfigChange} name="de_dust2" type="checkbox"/>
                                <span>de_dust2</span>
                            </div>
                            <div>
                                <input onChange={this.checkboxMapConfigChange} name="de_inferno" type="checkbox"/>
                                <span>de_inferno</span>
                            </div>
                            <div>
                                <input onChange={this.checkboxMapConfigChange} name="de_mirage" type="checkbox"/>
                                <span>de_mirage</span>
                            </div>
                            <div>
                                <input onChange={this.checkboxMapConfigChange} name="de_nuke" type="checkbox"/>
                                <span>de_nuke</span>
                            </div>
                            <div>
                                <input onChange={this.checkboxMapConfigChange} name="de_overpass" type="checkbox"/>
                                <span>de_overpass</span>
                            </div>
                            <div>
                                <input onChange={this.checkboxMapConfigChange} name="de_train" type="checkbox"/>
                                <span>de_train</span>
                            </div>
                        </div>
                        <input onChange={this.inputConfigChange} name="players_per_team" placeholder="players_per_team"
                               type="text"/>
                        <input onChange={this.inputConfigChange} name="coaches_per_team" placeholder="coaches_per_team"
                               type="text"/>
                        <input onChange={this.inputConfigChange} name="min_players_to_ready"
                               placeholder="min_players_to_ready" type="text"/>
                        <input onChange={this.inputConfigChange} name="mit_spectators_to_ready"
                               placeholder="mit_spectators_to_ready" type="text"/>
                        <div className={styles.team}>
                            <h2>Team 1</h2>
                            <input id={styles.teamName} onChange={this.teamConfigChange} name="team1" placeholder="name" type="text"/>
                            <input onChange={this.teamConfigChange} name="team1" placeholder="tag" type="text"/>
                            <input onChange={this.teamConfigChange} name="team1" placeholder="flag" type="text"/>
                            <input onChange={this.teamConfigChange} name="team1" placeholder="logo" type="text"/>
                            <div className={styles.players}>
                                <h3>Players:</h3>
                                <input id={styles.player} maxLength="17" onChange={this.playersConfigChange} placeholder="steamid_team1"
                                       type="text"/>
                                <input maxLength="17" onChange={this.playersConfigChange} placeholder="steamid_team1"
                                       type="text"/>
                                <input maxLength="17" onChange={this.playersConfigChange} placeholder="steamid_team1"
                                       type="text"/>
                                <input maxLength="17" onChange={this.playersConfigChange} placeholder="steamid_team1"
                                       type="text"/>
                                <input maxLength="17" onChange={this.playersConfigChange} placeholder="steamid_team1"
                                       type="text"/>
                            </div>
                        </div>
                        <div className={styles.team}>
                            <h2>Team 2</h2>
                            <input id={styles.teamName} onChange={this.teamConfigChange} name="team2" placeholder="name" type="text"/>
                            <input onChange={this.teamConfigChange} name="team2" placeholder="tag" type="text"/>
                            <input onChange={this.teamConfigChange} name="team2" placeholder="flag" type="text"/>
                            <input onChange={this.teamConfigChange} name="team2" placeholder="logo" type="text"/>
                            <div>
                                <div className={styles.players}>
                                    <h3>Players:</h3>
                                    <input id={styles.player} maxLength="17"
                                           onChange={this.playersConfigChange}
                                           placeholder="steamid_team2"
                                           type="text"/>
                                    <input maxLength="17" onChange={this.playersConfigChange}
                                           placeholder="steamid_team2"
                                           type="text"/>
                                    <input maxLength="17" onChange={this.playersConfigChange}
                                           placeholder="steamid_team2"
                                           type="text"/>
                                    <input maxLength="17" onChange={this.playersConfigChange}
                                           placeholder="steamid_team2"
                                           type="text"/>
                                    <input maxLength="17" onChange={this.playersConfigChange}
                                           placeholder="steamid_team2"
                                           type="text"/>
                                </div>
                            </div>
                        </div>
                    </form>
                    <input onClick={this.createNewConfig} type="button" value="create cfg"/>
                </section>
            </div>
        );
    }
}

export default NewConfig;
