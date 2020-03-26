import React, {useState} from "react";
import axios from "axios";
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
    axios.post ('/login', log)
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
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}

    </form>

      <div>
        <footer className="footer">
          <h6>&copy 2020 Word Surge</h6>
        </footer>
      </div>
    </div>
  )
}

export default Login;