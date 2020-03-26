import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import WordContext from "./contexts/WordContext";
import Register from "./Components/Register.js";
import Login from "./Components/Login.js";
import ProtectedRoute from "./ProtectedRoute.js";
import Navigation from "./Components/Navigation.js";
import AddWordList from "./Components/AddWordList.js";
import Puzzle from "./Components/Puzzle";
import styled from "styled-components";
import './App.scss';

const Body = styled.div`
  background: #2c666e;
`;

const Title = styled.h1`
  color: darkgray; 
`

/*
Dark Green: #073c3f
Green Blue color: #2c666e
Powder blue: #90ddf0
*/

function App() {
  const [events, setEvents] = useState([]);

  return (
    <Router>
      <WordContext.Provider value={{ events, setEvents }}>
        <div className="App">
          <Navigation />
            <div className="Title">
            <h1>Welcome to our Puzzle Maker App!</h1> 
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <ProtectedRoute exact path="/addWords" component={AddWordList} />
          <Puzzle />
            {/* <PrivateRoute exact path="/updateWords" component={UpdatedWords} /> */}
            </div>
        </div>
      </WordContext.Provider>
    </Router>
  );
}

export default App;
