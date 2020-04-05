import React from "react";
import { NavLink, Link } from "react-router-dom";
import WordSurge from "../../images/puzzle_2.svg";
import styled from "styled-components";
import Logout from "../Logout";
import WordContext from "../../contexts/WordContext";

const Header = styled.div`
  background: #2c666e;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  width: 60%;
  height: 100%;
  padding-right: 10px;
`;


export function Navigation() {
  const {loggedIn} = React.useContext(WordContext)

  return (
    <Header>
      
        <div className="navbar-header">
          <Link to="/"><img src={WordSurge} alt="logo" /></Link>
        </div>
        <Links>
          
            <NavLink className="nav-links" to={"/puzzles"}>
              Puzzles
            </NavLink>
           
          { loggedIn ? 
          
            <NavLink className="nav-links" to={"/addWords"}>
              Create
            </NavLink>
          
          : null}
          
            <NavLink className="nav-links" to={"/about"}>
              About
            </NavLink>
          
          {!loggedIn
          ?
          <>
          
          <NavLink className="nav-links" to={"/register"}>
              Register
          </NavLink>{" "}
          
          <NavLink className="nav-links" to={"/login"}>
              Log In
            </NavLink>
          
          </>
          : 
          <Logout />
        }
          
        </Links>
      
    </Header>
  );
}

export default Navigation;