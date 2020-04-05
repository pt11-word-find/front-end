import React, { useState, useEffect, useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import WordContext from "../contexts/WordContext";
import { Link } from "react-router-dom";

const ManagePuzzles = (props) => {
    const { puzzles, setPuzzles }= useContext(WordContext);
    

    useEffect(() => {
        axiosWithAuth()
            .get(`wordlists/mine`)
            .then(response => {
                console.log("my puzzles", response)
                setPuzzles(response.data)
            })
            .catch(err => {
                console.log("Error in getMyPuzzle", err)
            })
    }, [])

    const handleDelete = id => {
        console.log("Props: ", id)
        axiosWithAuth()
          .delete(`/wordlists/${id}`)
          .then(response => {
            console.log("Response Data: ", response.data)
            setPuzzles(puzzles.filter(item => item.id !== id))
            props.history.push("/puzzles")
          })
          .catch(err => console.log("Error in Delete Function: ", err))
        }

    return(

        <>
        <h3>Choose a puzzle:</h3>

        {puzzles.length > 0 ? <div className="manage-puzzles">
        {puzzles.map(item => {
            return <div className="puzzle-link"><Link to={`/puzzles/${item.id}`}>
            <div>{item.title}</div></Link><button type="submit" className="manage-button" onClick={() => handleDelete(item.id)}>Delete Puzzle</button></div>})}
                      
            
        </div> 
        : <h3>Loading ...</h3>}
    </>
    )
}

    export default ManagePuzzles;


