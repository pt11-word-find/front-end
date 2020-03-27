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
        setPuzzle(wordSearch(wordlist.map(item => item.toUpperCase()), 20, 20, 1))
    }, [wordlist])

    // useEffect(() => {
    //     console.log(puzzle)
    // }, [puzzle])

    return (
        <div className="container">
        <div className="puzzle">
            {puzzle.map((row, r_index) => 
                <div key={r_index + row} className="row">
                    {row.map((tile, c_index) => 
                        <div key={c_index + tile} className="tile" onClick>
                            {tile}
                        </div>
                    )}
                </div>
            )}

        </div>
        <div className="word-list">
            {wordlist.map(word => 
            <p>{word}</p>
            )}
        </div>
    </div>
    )
}

export default Puzzle;