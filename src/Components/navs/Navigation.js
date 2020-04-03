import React from "react";
import { NavLink, Link, Route } from "react-router-dom";
import WordSurge from "../../images/WordSurge.png";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Logout from "../Logout";
import WordContext from "../../contexts/WordContext";

const Header = styled.div`
  background: #2c666e;
  height: 4rem;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 60%;

`;

const HeaderLink = styled.h4``;

/*
Rich Black Green: #073c3f
Myrtle Green: #2c666e
Baby Blue: #90ddf0
*/

export function Navigation() {
  const history = useHistory();
  const {loggedIn} = React.useContext(WordContext)

  return (
    <Header className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/"><img src={WordSurge} alt="logo" /></Link>
        </div>
        <Links className="nav navbar-nav">
          <HeaderLink>
            <NavLink className="nav-links play-now" to={"/puzzles"}>
              Play Now!
            </NavLink>
          </HeaderLink> 
        
          {!loggedIn
          ?
          <>
          <HeaderLink>
          <NavLink className="nav-links" to={"/register"}>
              Register
          </NavLink>{" "}
          </HeaderLink>
          <HeaderLink>
            <NavLink className="nav-links" to={"/login"}>
              Log In
            </NavLink>
          </HeaderLink>
          </>
          : 
          <>
        <HeaderLink>
          <NavLink className="nav-links" to={"/addWords"}>
            Create Puzzle
          </NavLink>
        </HeaderLink>
        <HeaderLink>
          <Logout />
        </HeaderLink>
        </>}
        <HeaderLink>
            <NavLink className="nav-links" to={"/about"}>
              About Us
            </NavLink>
        </HeaderLink>
        </Links>
      </div>
    </Header>
  );
}

export default Navigation;