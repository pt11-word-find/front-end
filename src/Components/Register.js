import React, {useState} from "react";
import axios from "axios";


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
    return(
        <form onSubmit= {handleSubmit}>
            <input
            placeholder= "Username"
            type= "text"
            name="username"
            value= {data.username}
            onChange= {handleChange}
            />
              <input
            placeholder= "First Name"
            type= "text"
            name="first_name"
            value= {data.first_name}
            onChange= {handleChange}
            />
              <input
            placeholder= "Last Name"
            type= "text"
            name="last_name"
            value= {data.last_name}
            onChange= {handleChange}
            />
              <input
            placeholder= "Password"
            type= "password"
            name="password"
            value= {data.password}
            onChange= {handleChange}
            />
              <input
            placeholder= "e-mail"
            type= "text"
            name="email"
            value= {data.email}
            onChange= {handleChange}
            />
           
    <button type="submit"> Submit </button>
    </form>
    
        )




}

export default Register;