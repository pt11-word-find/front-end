import React, {useState} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";

const Title = styled.h2`
  color: darkgray;
`;

/*
Dark Green: #073c3f
Green Blue color: #2c666e
Powder blue: #90ddf0
*/

const Login = (props)=>{

  const [log, setLog]= useState({
    username: "",
    password: "",

  })
  const handleChange= e=>{
    setLog({...log, [e.target.name ]: e.target.value})
  }
  const handleSubmit= e=>{
    e.preventDefault()
    axiosWithAuth()
    .post ('/login', log)
    .then( res => {console.log(res)
        localStorage.setItem("token", res.data.token)
        props.history.push( "/")})
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