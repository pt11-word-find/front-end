import React from "react";
import { Link } from "react-router-dom";
import WordContext from "../contexts/WordContext";

const Logout = () => {
   const {setLoggedIn} = React.useContext(WordContext);
   const logout = _ => {
      localStorage.removeItem("token")
      setLoggedIn(false)
   }

   return(
      <Link className="nav-links" to="/login" onClick={logout}>Logout</Link>
   )
}

export default Logout;