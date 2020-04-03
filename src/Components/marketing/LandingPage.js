import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import "./LandingPage.scss"
import Footer from '../navs/Footer'
import landingpic from "../../images/logoillustration.png"

const LandingPage = () => {
  return (
    <div className="landing-page">
    <h1>Word Surge: Puzzles to the People!</h1>
    <div data-aos="fade-down" data-aos-duration="1000" className="cta-container">
      <div className="cta">
        <Link to="/puzzles"><button>Play Now!</button></Link>
        <hr />
        <Link to="/register"><button>Create a New Puzzle</button></Link>
      </div>
      <div className="landing-pic">
        <img src={landingpic} />
      </div>
      
    </div>
    <Footer />
    </div>
  )
}

export default LandingPage