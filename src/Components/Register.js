import React, { useState } from "react"; 
import styled from "styled-components";
import axios from "axios";
import {Link} from "react-router-dom"

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      .post ('https://wordsurge.xyz/api/auth/register', register)
      .then( res => {
        localStorage.setItem("token", res.data.token)
        props.history.push( "/login")})
      .catch( err => {
          console.log (err)
      })
    }


  return (
    <FormWrapper className="puzzle-form" onSubmit={handleSubmit}>
      <div className="Title">
        <h2>Please Register To Create Puzzles</h2>

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
      <button className="manage-button" type="submit"> Submit </button>
      <p>Already have an account? <Link to="/login">Login here!</Link></p>
    </FormWrapper>
    
    );
}

export default Register;