import React, {useState} from "react";
import axios from "axios";
import styled from "styled-components";

const Title = styled.h2`
  color: darkgray;
`;

/*
Rich Black Green: #073c3f
Myrtle Green: #2c666e
Baby Blue: #90ddf0
*/

const Login = (props) => {

  const [log, setLog] = useState({
    username: "",
    password: ""

  })

  const handleChange= e =>{
    setLog({...log, [e.target.name ]: e.target.value})
  }

  const handleSubmit= e =>{
    e.preventDefault()
    axios
    .post ('https://wordlist-backend.herokuapp.com/auth/login', log)
    .then( res => {
      console.log(res)
      localStorage.setItem("token", res.data.token)
      props.history.push( "/addWords")})
    .catch( err => {
        console.log (err)
    })
  }

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
    </form>

      <div>
        <footer className="footer">
        {'\u00A9'} 2020 Word Surge
        </footer>
      </div>
    </div>
  )
}

export default Login;