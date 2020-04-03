import React, { useState } from "react"; 
import styled from "styled-components";
import axios from "axios";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

// const Title = styled.h2`
//   color: darkgray;
// `;
/*
Rich Black Green: #073c3f
Myrtle Green: #2c666e
Baby Blue: #90ddf0
*/

const Register = (props) => {

    const [register, setRegister] = useState({
        username: "",
        password: ""
    })
    
    const handleChange= e => {
      setRegister({...register, [e.target.name ]: e.target.value})
    }

    const handleSubmit= e => {
      e.preventDefault()
      axios
      .post ('https://wordlist-backend.herokuapp.com/auth/register', register)
      .then( res => {
        console.log(res)
        localStorage.setItem("token", res.data.token)
        props.history.push( "/login")})
      .catch( err => {
          console.log (err)
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
        value={register.username}
        onChange={handleChange}
      />
      <input
        placeholder="Password"
        type="password"
        name="password"
        value={register.password}
        onChange={handleChange}
      />
      <button type="submit"> Submit </button>
    </FormWrapper>
    
    );
}

export default Register;