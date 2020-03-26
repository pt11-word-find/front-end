import React, { useState, useEffect } from "react";
import wordSearch from "../utils/wordSearch-generator";

const Puzzle = () => {

    const [puzzle, setPuzzle] = useState([[]])
    const [wordlist, setWordlist] = useState([
        "eggs",
        "sugar",
        "butter",
        "flour",
        "chocolate"
    ])

    useEffect(() => {
        setPuzzle(wordSearch(wordlist.map(item => item.toUpperCase()), 15, 15, 1))
    }, [wordlist])

    useEffect(() => {
        console.log(puzzle)
    }, [puzzle])

    return (
        <div>
            {puzzle.map(row => 
                <div className="row">
                    {row.map(tile => 
                        <div className="tile">{puzzle[0]}
                        {console.log(puzzle[0])}</div>
                    )}
                </div>
            )}
        
        </div>

    )
}

export default Puzzle;