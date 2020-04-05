import React, { useState, useContext, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../App.scss"
import WordContext from "../contexts/WordContext"
import { Link } from "react-router-dom";
import ManagePuzzles from "./ManagePuzzles";

const PuzzleList=()=>{
    const { puzzles, setPuzzles }= useContext(WordContext);

    useEffect(() =>{
      axiosWithAuth()
        .get("/wordlists")
        .then (response =>{
          console.log(response)
        setPuzzles(response.data)
        })
    }, [])


    return(
      <>
      <h3>Choose a puzzle:</h3>
    
      <Link to={`/managepuzzles`}>Manage My Puzzles</Link>
    
      {puzzles.length > 0 ? <div className="puzzle-list">
      {puzzles.map(item => {
        return <div className="puzzle-link"><Link to={`/puzzles/${item.id}`}>{item.title}</Link></div>})}   
      </div> 
      : <h3>Loading ...</h3>}
      </>
    )
  
  }
export default PuzzleList;