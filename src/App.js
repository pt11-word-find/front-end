import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
import WordContext from "./contexts/WordContext";
import LandingPage from "./Components/marketing/LandingPage.js";
import AboutPage from "./Components/marketing/AboutPage.js";
import Register from "./Components/Register.js";
import Login from "./Components/Login.js";
import ProtectedRoute from "./ProtectedRoute.js";
import Navigation from "./Components/navs/Navigation.js";
import AddWordList from "./Components/AddWordList.js";
import PuzzleList from "./Components/PuzzleList";
import Puzzle from "./Components/Puzzle";
import ManagePuzzles from "./Components/ManagePuzzles";
import Admin from "./Components/Admin";
import Footer from "./Components/navs/Footer";

import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


function initializeAnalytics() {
  ReactGA.initialize('UA-156199574-3');
  ReactGA.pageview("/");
}

function App() {
  const [puzzles, setPuzzles] = useState([]);
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("token")))

  useEffect( _ => {
    initializeAnalytics();
    ReactGA.event({ category: 'App', 
    action: 'Loaded app' });
  }, [])


  return (
    <Router>
      <WordContext.Provider value={{ puzzles, setPuzzles, loggedIn, setLoggedIn }}>
        <div className="App">
          <Navigation />
          <div className="Title">
            <ProtectedRoute exact path="/addWords" component={AddWordList} />
            {/* <ProtectedRoute exact path="/updateWords" component={UpdatedWords} /> */}
            <Route exact path="/" component={LandingPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route exact path="/puzzles" component={PuzzleList} />
            <Switch>
              <Route path="/puzzles/hard/:id" render={props => <Puzzle {...props} hard={true} /> } />
              <Route path="/puzzles/:id" component={Puzzle} />
            
            </Switch>
            <Route path="/managepuzzles" component={ManagePuzzles} />
            <Route path="/admin" component={Admin} />
          </div>
          <Footer />
        </div>
      </WordContext.Provider>
    </Router>
  );
}

export default App;
