import React, { useState, useEffect } from "react";
import wordSearch from "../utils/wordSearch-generator";
import AddWordList from "../Components/AddWordList"

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
        if( wordlist.length > 1)
        {setPuzzle(wordSearch(wordlist.map(item => item.toUpperCase()), 
        20, 20, 1))}
    }, [])

    // useEffect(() => {
    //     console.log(puzzle)
    // }, [puzzle])

    return (
        <div className="puzzle">
            {puzzle.map(row => 
                <div className="row">
                    {row.map(tile => 
                        <div className="tile">
                            {tile}
                        </div>
                    )}
                </div>
            )}
            <div>
            {wordlist.map(word => 
            <p className="word-list">{word}</p>
            )}
            </div>
        
        </div>

    )
}

export default Puzzle;