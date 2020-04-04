import React, { useState, useContext, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../App.scss"
import WordContext from "../contexts/WordContext"
import { Link } from "react-router-dom";

const PuzzleList=()=>{
    const { puzzles, setPuzzles }= useContext(WordContext);

    useEffect(() =>{
      axiosWithAuth()
        .get("/wordlists")
        .then (response =>{
        setPuzzles(response.data)
        })
    }, [])



  return(
    <>
    <h3>Choose a puzzle:</h3>

    {puzzles.length > 0 ? <div className="puzzle-list">
    {puzzles.map(item => {
      return <Link to={`/puzzles/${item.id}`}><div className="puzzle-link">{item.title}</div></Link>})}   
    </div> 
    : <h3>Loading ...</h3>}
    </>
  )

}
export default PuzzleList;