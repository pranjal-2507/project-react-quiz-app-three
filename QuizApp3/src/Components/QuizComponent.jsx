import React, { useState } from 'react';
import './Quiz.css';
import quizQuestion from '../resources/quizQuestion';
import ResultComponent from './Result.Component';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const [currentQues, setCurrentQues] = useState(0);
  const [score,setScore] = useState(0)

  let  handlePre = () => {
    setCurrentQues((prevQues) => (prevQues === 0 ? quizQuestion.length - 1 : prevQues - 1));
  };

  let handleNext = () => {
    setCurrentQues((prevQues) => (prevQues === 14 ? 0 : prevQues + 1));
  };

  let handleQuit = () => {
    window.confirm('Are you sure you want to quit ?');
  };

  let handleOption = (e)=>{
    if (e.target.textContent == quizQuestion[currentQues].answer){
      setScore(score+1)
      setCurrentQues(currentQues+1)
    }
    
    else{
      alert("Wrong Answer!")
      setCurrentQues(currentQues+1)
    }
  }
  let handleFinish = ()=>{
    localStorage.setItem("score",score)
    localStorage.setItem("currentQues", currentQues)
  }


  console.log(quizQuestion[0].answer)
  return (
    <>
      <div className="container">
        <h1 className="ques">Question</h1>
        <div className="NoOfQues">
          <span>{currentQues + 1} </span>of 15
        </div>
        <p>{quizQuestion[currentQues].question}</p>

        <div className="options">
          <button className="option" onClick={handleOption}>{quizQuestion[currentQues].optionA}</button>
          <button className="option" onClick={handleOption}>{quizQuestion[currentQues].optionB}</button>
          <button className="option" onClick={handleOption}>{quizQuestion[currentQues].optionC}</button>
          <button className="option" onClick={handleOption}>{quizQuestion[currentQues].optionD}</button>
        </div>
        <div className="lastBtns">
          <button id="pre" className="btn" onClick={handlePre}>
            Previous
          </button>
          <button id="next" className="btn" onClick={handleNext}>
            Next
          </button>
          <button id="quit" className="btn" onClick={handleQuit}>
            Quit
          </button>
          <Link to="/result">
            <button id="finish" className="btn" onClick={handleFinish}>
              Finish
            </button>
          </Link>
        </div>
      </div>
   </>
  );
};

export default Quiz;
