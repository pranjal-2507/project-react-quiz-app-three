import React from "react";
import "./Home.css";
import QuizComponent from './QuizComponent'
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  DisplayQuiz = ()=>{
    return <QuizComponent/>
  }
  render() {
    return (
      <>
        <div className="main">
          <h1>Quiz App</h1>
          <Link to={"/quiz"}><button >Play</button></Link>
        </div>
      </>
    );
  }
}
