import React, {useState} from "react";
import styles from './graph.module.css'

let Graph = () => {
    let [step, setStep] = useState(1)

    //


    let [teams_step1, updateTeams_step1] = useState([
        [
            {
                "teamName": "Navi",
                "score": 2,
                "players": ["simple", "khan", "1win", "Lions", "Slash"]
            },
            {
                "teamName": "Fnatic",
                "score": 0,
                "players": ["JW", "flusha", "KRIMZ", "Zeus", "rain"]
            },
        ],
        [
            {
                "teamName": "VirtusPro",
                "score": 3,
                "players": ["tarik", "Zeus", "fer", "NiKo", "coldzera"]
            },
            {
                "teamName": "SKADE",
                "score": 1,
                "players": ["GuardiaN", "edward", "boltz", "NEO", "Hiko"]

            },
        ],
        [
            {
                "teamName": "Spirit",
                "score": 2,
                "players": ["twist", "shox", "NBK", "RUSH", "NAF"]

            },
            {
                "teamName": "TeamVasyaPupkin",
                "score": 0,
                "players": ["Dima", "Nagibator", "Traxodron2000", "Vasya", "s23"]
            }],
        [
            {
                "teamName": "Obosransi",
                "score": 3,
                "players": ["twist", "shox", "NBK", "RUSH", "NAF"]

            },
            {
                "teamName": "Obossansi",
                "score": 0,
                "players": ["Dima", "Nagibator", "Traxodron2000", "Vasya", "s23"]
            }],
    ]);

    let [teams_step2, updateTeams_step2] = useState([])
    let [teams_step3, updateTeams_step3] = useState([])

    let nextStep = () => {
        let newTeams = [];
        let stepName = "teams_step" + step;

        switch (stepName) {
            case "teams_step1":

                teams_step1.forEach((item) => {
                    //item = [ {team1}, {team2}]
                    let max = 0;

                    item.forEach((el) => {
                        //el = {team}
                        if (el.score > max) {
                            max = el.score

                            let elArray = []

                            elArray.push(el)
                            newTeams.push(elArray)
                        }
                    })
                })
                // newTeams = [ [ {team1} ], [ {team2} ], [ {team3} ], [ {team4} ] ]
                // team1 + team2, team3 + team4 = [ [ {team1}, {team2} ], [ {team3}, {team4} ] ]
                //

                /* for(let i = 0; i < newTeams.length; i++) {

                 }*/
                let resArr = []

                for (let index = 0; index < newTeams.length; index++) {
                    let result = [];
                    result = [...newTeams[index], ...newTeams[index + 1]];

                    resArr.push(result)

                    index++
                }

                updateTeams_step2(resArr)

                break;
            case "teams_step2":

                teams_step2.forEach((item) => {
                    //item = [[ {},{} ], [ {}, {} ]]
                    let max = 0;

                    console.log(item)

                    item.reduce((prev, el) => {
                        if (el.score > prev) {

                            let elArray = []

                            elArray.push(el)
                            newTeams.push(elArray)
                            console.log(newTeams)
                        }
                        prev++;
                        console.log(prev)
                    }, 0)
/*

                    item.forEach((el) => {
                        //el = {team}
                        // score 2
                        // score 3




                    })
*/

                })


                updateTeams_step3(newTeams)
                break;
        }

        setStep(step + 1);
    }


    return (
        <div className={styles.wrapper}>
            <header className={styles.wrap_header}>
                <h2>Graph test</h2>
                <button onClick={nextStep}>Next Step</button>
            </header>
            <section className={styles.teams}>
                <div className={styles.step1}>
                    <h2>Step 1</h2>
                    {teams_step1.map(item => {

                        return item.map(el => {
                            return (
                                <div className={styles.team}>
                                    <span className={styles.teamName}>{el.teamName}</span>
                                    <span className={styles.score}>score: {el.score}</span>
                                </div>
                            )
                        })
                    })}
                </div>
                <div className={styles.step2}>
                    <h2>Step 2</h2>
                    {teams_step2.map(item => {

                        return item.map(el => {
                            return (
                                <div className={styles.team}>
                                    <span className={styles.teamName}>{el.teamName}</span>
                                    <span className={styles.score}>score: {el.score}</span>
                                </div>
                            )
                        })
                    })}
                </div>
                <div className={styles.step3}>
                    <h3>Step 3 (Final)</h3>
                    {teams_step3.map(item => {

                        return item.map(el => {
                            return (
                                <div className={styles.team}>
                                    <span className={styles.teamName}>{el.teamName}</span>
                                    <span className={styles.score}>score: {el.score}</span>
                                </div>
                            )
                        })
                    })}
                </div>
            </section>
        </div>
    );
}

export default Graph;
