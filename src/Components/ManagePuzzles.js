import React, { useState, useEffect, useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import WordContext from "../contexts/WordContext";
import { Link } from "react-router-dom";

const ManagePuzzles = (props) => {
    const { puzzles, setPuzzles }= useContext(WordContext);
    const [myPuzzles, setMyPuzzles] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get(`wordlists/mine`)
            .then(response => {
                console.log(response.data)
                setMyPuzzles(response.data)
            })
            .catch(err => {
                console.log("Error in getMyPuzzle", err)
            })
    }, [])

    const handleDelete = id => {
        axiosWithAuth()
          .delete(`/wordlists/${id}`)
          .then(response => {
            setPuzzles(puzzles.filter(item => item.id !== id))
            props.history.push("/puzzles")
          })
          .catch(err => console.log("Error in Delete Function: ", err))
        }

    return(

        <>
        <h3>Choose a puzzle:</h3>
        <Link to="/puzzles">Back</Link> to Puzzle List

        {myPuzzles.length > 0 ? <div className="manage-puzzles">
        {myPuzzles.map(item => {
            return <div key={item.id} className="puzzle-link">
            <h4>{item.title}</h4>
            <Link to={`/puzzles/${item.id}`}><button className="manage-button difficulty-button">Easy</button></Link>
            <Link to={`/puzzles/hard/${item.id}`}><button className="manage-button difficulty-button">Hard</button></Link>
            <button type="submit" className="manage-button" onClick={() => handleDelete(item.id)}>Delete Puzzle</button></div>})}
                      
            
        </div> 
        : <h3>Loading ...</h3>}
    </>
    )
}

    export default ManagePuzzles;


