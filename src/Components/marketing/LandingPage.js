import React from 'react'
import { Link } from 'react-router-dom'
import "./LandingPage.scss"
import landingpic from "../../images/logoillustration.png"
import WordContext from "../../contexts/WordContext"

const LandingPage = () => {
  const {loggedIn} = React.useContext(WordContext);
  return (
    <div className="landing-page">
    <h1>Word Surge: Puzzles to the People!</h1>
    <div data-aos="fade-down" data-aos-duration="1000" className="cta-container">
      <div className="cta">
        <Link to="/puzzles"><button>Play Now!</button></Link>
        <hr />
        <Link to={loggedIn ? "/addWords" : "/register"}><button>Create a New Puzzle</button></Link>
      </div>
      <div className="landing-pic">
        <img alt="people putting together a puzzle shaped like a head" src={landingpic} />
      </div>
      
    </div>
    
    </div>
  )
}

export default LandingPage