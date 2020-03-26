import React from "./node_modules/react";
import { Link } from "./node_modules/react-router-dom";

const Logout = () => {
   return(
      <Link to="/login"><button type="submit" onClick={() => localStorage.removeItem("token")}>Logout</button></Link>
   )
}

export default Logout;