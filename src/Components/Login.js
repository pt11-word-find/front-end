import React, {useState} from "react";
import axios from "axios";


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
    return(
        <form onSubmit= {handleSubmit}>
            <input
            placeholder= "Username"
            type= "text"
            name="username"
            value= {log.username}
            onChange= {handleChange}
            />
              <input
            placeholder= "Password"
            type= "password"
            name="password"
            value= {log.password}
            onChange= {handleChange}
            />
           
    <button type="submit"> Submit </button>
    </form>
    
        )




}





export default Login;