import React, {useState} from "react";
import axios from "axios";
import styled from "styled-components";
import WordContext from "../contexts/WordContext"

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const Login = (props) => {
  const {setLoggedIn} = React.useContext(WordContext)
  const [log, setLog] = useState({
    username: "",
    password: "",
  });

  const handleChange= e =>{
    setLog({...log, [e.target.name ]: e.target.value})
  }

  const handleSubmit= e =>{
    e.preventDefault()
    axios
    .post ('https://wordsurge.xyz/api/auth/login', log)
    .then( res => {
      localStorage.setItem("token", res.data.token);
      setLoggedIn(true);
      props.history.push( "/addWords")})
    .catch( err => {
        console.log (err)
    })
  }
  
  return (
      <FormWrapper className="puzzle-form" onSubmit={handleSubmit}>
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
        <button className="manage-button-2" type="submit"> Submit </button>
      </FormWrapper>
  );
}

export default Login;