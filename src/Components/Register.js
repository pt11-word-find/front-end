import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  
`;

const Title = styled.h2`
  color: darkgray;
`;

/*
Dark Green: #073c3f
Green Blue color: #2c666e
Powder blue: #90ddf0
*/

const Register = (props)=>{

    const [data, setData]= useState({
        username: "",
        password: ""
        

    })
    const handleChange= e=>{
      setData({...data, [e.target.name ]: e.target.value})
    }
    const handleSubmit= e=>{
      e.preventDefault()
      axios
      .post ('https://wordlist-backend.herokuapp.com/auth/register', data)
      .then( res => {
        console.log(res)
        localStorage.setItem("token", res.data.token)
        props.history.push( "/wordlists")})
      .catch( err => {
          console.log (err)
      })
      setData({ 
        username: "",
        password: ""
      })
    }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <div className="Title">
        <h2>Please Register</h2>
      </div>
      <input
        placeholder="Username"
        type="text"
        name="username"
        value={data.username}
        onChange={handleChange}
      />
      
      <input
        placeholder="Password"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
      />
      
      <button class = "bt1" type="submit"> Submit </button>
    </FormWrapper>
  );
}

export default Register;