import React, { useEffect } from "react";
import axios from "axios";


const Puzzle = () => {

    useEffect(() => {
        axios
            .get('/wordlists')
            .then(response => {
                console.log(response.data)
            })
            .catch(err => {
                console.log("Error getting the Puzzle")
            })
    })
    return (
        <div>We're displaying a puzzle here!
        

        
        
        
        
        
        </div>

    )
}

export default Puzzle;