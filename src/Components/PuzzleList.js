import React, { useContext, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../App.scss"
import WordContext from "../contexts/WordContext"
import { Link } from "react-router-dom";


const PuzzleList=()=>{
    const { puzzles, setPuzzles }= useContext(WordContext);
    const { loggedIn } = useContext(WordContext);

    useEffect(() =>{
      axiosWithAuth()
        .get("/wordlists")
        .then (response =>{
          console.log(response)
        setPuzzles(response.data)
        })
    }, [])

    // If loggedIn === true, show managepuzzles link 
    return(
      <>
      <h3>Choose a puzzle:</h3>
      {loggedIn
      ?
      <Link to={`/managepuzzles`}>Manage My Puzzles</Link>
      :
      null
      }
    
      {puzzles.length > 0 ? <div className="puzzle-list">
      {puzzles.map(item => {
        return <div className="puzzle-link"><Link to={`/puzzles/${item.id}`}>{item.title}</Link></div>})}   
      </div> 
      : <h3 className="loading">Loading ...</h3>}
      </>
    )
  
  }
export default PuzzleList;