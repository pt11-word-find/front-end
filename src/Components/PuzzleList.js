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
          console.log(response)
        setPuzzles(response.data)
        })
    }, [])



  return(
    <>
    {puzzles.map(item => {
      return <div><Link to={`/puzzles/${item.id}`}>{item.title}</Link></div>})}   
    </> 
    
  )

}
export default PuzzleList;