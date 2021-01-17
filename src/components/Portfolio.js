import React from 'react';
import Project from './Project'
import weather from '../assets/weather.png'
import quiz from '../assets/quiz.png'
import game from '../assets/game.png'

function Portfolio() {
    return(
        <>
        <div className="container-fluid mt-5">
        <div className="col-12 py-3 mb-5 bg-light h-auto d-inline-block w-auto">
            <h1 style={{"color":"#0a6751"}}>Portfolio</h1>
            <hr />
            <Project 
            link={"https://johnwestermeyer.github.io/WeatherDashboard/"}
            img={weather}
            alt={"Weather Dashboard"}
            />  
            <Project 
            link={"https://johnwestermeyer.github.io/TimedQuiz/"}
            img={quiz}
            alt={"Timed Quiz"}
            />
            <br />
            <Project 
            link={"https://github.com/johnwestermeyer/QuarantineGame"}
            img={game}
            alt={"Quarantine Game"}
            />
            <br />
        </div>
        </div>
        </>
    )

}

export default Portfolio;