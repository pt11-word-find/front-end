import React from "react";
import stars from "../images/stars.svg";
import { Link } from "react-router-dom";

const Modal = ({ modal }) => {

    const showHideClassName = modal ? "win-box display-block" : "win-box display-none";
  
    return (
      <div className={showHideClassName}>
        <section>
          <img src={stars} alt="star graphic"></img>
          <br />
          <Link to="/puzzles"><button type="submit" className="manage-button">Select a New Puzzle</button></Link>
        </section>
      </div>
    );
  };

  export default Modal;