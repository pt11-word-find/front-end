import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import "./LandingPage.scss"
import Footer from '../navs/Footer'
import landingpic from "../../images/logoillustration.png"

const LandingPage = () => {
  return (
    <div className="landing-page">
    <h1>Word Surge: An On-Demand Word Search Generator</h1>
    <div className="cta-container">
      <div className="cta">
        <Link to="/puzzles"><button>Play Now!</button></Link>
        <hr />
        <Link to="/register"><button>Create your own Word Search!</button></Link>
      </div>
      <div className="landing-pic">
        <img src={landingpic} />
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default LandingPage