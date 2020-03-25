import React, {useState} from "react";
import axios from "axios";
import styled from "styled-components";

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
        first_name: "",
        last_name: "",
        password: '',
        email: "",

    })
    const handleChange= e=>{
      setData({...data, [e.target.name ]: e.target.value})
    }
    const handleSubmit= e=>{
      e.preventDefault()
      axios.post ('/register', data)
      .then( res => {console.log(res)
      props.history.push( "/Login")})
      .catch( err => {
          console.log (err)
      })
      setData({ username: "",
      first_name: "",
      last_name: "",
      password: '',
      email: "",})
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
        placeholder="First Name"
        type="text"
        name="first_name"
        value={data.first_name}
        onChange={handleChange}
      />
      <input
        placeholder="Last Name"
        type="text"
        name="last_name"
        value={data.last_name}
        onChange={handleChange}
      />
      <input
        placeholder="Password"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
      />
      <input
        placeholder="e-mail"
        type="text"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <button type="submit"> Submit </button>
    </FormWrapper>
  );
}

export default Register;