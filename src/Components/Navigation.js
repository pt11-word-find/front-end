import React from "react";
import { NavLink, Route } from "react-router-dom";
import WordSurge from "../images/WordSurge.png";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Header = styled.div`
  background: #2c666e;
  height: 18rem;
`;

/*
Rich Black Green: #073c3f
Myrtle Green: #2c666e
Baby Blue: #90ddf0
*/

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 35%;
`;

const HeaderLink = styled.h4``;

export function Navigation() {
  const history = useHistory();

  const handleLogout = () => {
    return localStorage.removeItem("token"), history.push("/");
  };

  return (
    <Header className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <h1 className="navbar-brand" to={"/"}>
            <a 
              href=""
              style={{ textDecoration: "underline overline", color: "black" }}>
              Word Surge  
              </a>
          </h1>
          <img src={WordSurge} alt="logo" />
        </div>
        <Links className="nav navbar-nav">
          <HeaderLink>
            <NavLink className="nav-links" to={"/register"}>
              Register
            </NavLink>{" "}
          </HeaderLink>
          <HeaderLink>
            <NavLink className="nav-links" to={"/"}>
              Log In
            </NavLink>
          </HeaderLink>
          <HeaderLink>
            <NavLink 
              className="nav-links" 
              to={"/logout"}>
              {/* onClick={handleLogout}> */}
              Log Out
            </NavLink>
          </HeaderLink>
          <HeaderLink>
            <NavLink className="nav-links" to={"/addWords"}>
              Add Words
            </NavLink>
          </HeaderLink>
        </Links>
      </div>
    </Header>
  );
}

export default Navigation;