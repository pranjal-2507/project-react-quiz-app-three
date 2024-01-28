import React from 'react'
import './Result.css'
import { Link } from 'react-router-dom'

export default class Result extends React.Component{
   
    render(){
        let score = localStorage.getItem("score")
        let attemptedQues = localStorage.getItem("currentQues")

        return(
            <>
            <h1 >Result</h1>
            <div className="cont">
                <h3 className='phrase'>You need more practice!</h3>
                <h1 className='Scorephrase'> Your score is {score/15 * 100}%</h1>
                <div className="div1">
                    <span>Total number of questions</span> <span>15</span>
                </div>
                <div className="div1">
                    <span>Number of attempted questions</span> <span>{attemptedQues}</span>
                </div>
                <div className="div1">
                    <span>Number of correct answers</span> <span>{score}</span>
                </div>
                <div className="div1">
                    <span>Number of wrong answers</span> <span>{Math.abs(attemptedQues - score)}</span>
                </div>
            </div>

            <div className="Btns">
               <Link to={"/quiz"}><button id='play'>Play Again</button></Link> 
                <Link to={"/"}><button id='back'>Back to Home</button></Link>
            </div>
            </>
        )
    }
}