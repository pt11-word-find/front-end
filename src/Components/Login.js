import React, {useState} from "react";
import axios from "axios";
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import { useHitsory } from 'react-router-dom';
import styled from "styled-components";
import WordContext from "../contexts/WordContext"

const Title = styled.h2`
  color: darkgray;
`;

/*
Rich Black Green: #073c3f
Myrtle Green: #2c666e
Baby Blue: #90ddf0
*/

const Login = (props) => {
  const {setLoggedIn} = React.useContext(WordContext)
  const [log, setLog] = useState({
    username: "",
    password: "",
  });

  // const history = useHistory();

  // const logout = () => {
  //   localStorage.removeItem("token");
  //   history.push("/login");
  // };

  const handleChange= e =>{
    setLog({...log, [e.target.name ]: e.target.value})
  }

  const handleSubmit= e =>{
    e.preventDefault()
    axios
    .post ('https://wordlist-backend.herokuapp.com/auth/login', log)
    .then( res => {
      localStorage.setItem("token", res.data.token);
      setLoggedIn(true);
      props.history.push( "/addWords")})
    .catch( err => {
        console.log (err)
    })
  }

  // Make sure to add a logout function
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="Title">
          <h2>Please Login</h2>
        </div>
        <input
          placeholder="Username"
          type="text"
          name="username"
          value={log.username}
          onChange={handleChange}
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={log.password}
          onChange={handleChange}
        />
        <button type="submit"> Submit </button>
        {/* <Button
          onClick={logout}
          outline
          style={{ color: "#f99c1b", border: "1px solid #f99c1b" }}
          className="word-r2">
          Log Out */}
        {/* </Button> */}
      </form>
    </div>
  );
}

export default Login;