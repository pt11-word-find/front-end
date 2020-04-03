import React, { useState, useContext, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Puzzle from "./Puzzle";
import "../App.scss"
import WordContext from "../contexts/WordContext"

const PuzzleList=()=>{
    const {puzzle, setPuzzle}= useContext(WordContext);

    useEffect(() =>{
    axiosWithAuth()
    .get("/wordLists")
    .then (response =>{
      console.log(response)
      setPuzzle(response.data)
    })
  }, [setPuzzle])

  return(
    <>
    {puzzle.map(item=>{
        return <div>{item.title}</div>})}
        <button type = "submit" >
          Get Puzzles</button>
          </> 
  )

}
export default PuzzleList;