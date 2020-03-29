import React, { useState, useEffect } from "react";
import wordSearch from "../utils/wordSearch-generator";
import arrayIncluded from "../utils/arrayIncluded";
import arrayEqual from "../utils/arrayEqual";

const Puzzle = () => {
    

    const [puzzle, setPuzzle] = useState([[]])
    const [selectLetter, setSelectLetter] = useState([])
    const [wordlist, setWordlist] = useState([
        "eggs",
        "sugar",
        "butter",
        "flour",
        "chocolate"
    ])

    useEffect(() => {
        setPuzzle(wordSearch(wordlist.map(item => item.toUpperCase()), 10, 10, 1))
    }, [wordlist])

    useEffect(() => {
        let sortedSelect = selectLetter.map(item => puzzle[item[0]][item[1]]).sort()
        
        wordlist.map(item => {
            if (arrayEqual(sortedSelect, item.toUpperCase().split("").sort())) {
                console.log(item.split("").sort())
                console.log("Match")
            }
            
        })
    }, [selectLetter])


    // tile = [row, col]
    // selectLetter is an array
    // setSelectLetter is a function that sets selectLetter
    // if selectLetter contains tile, remove tile
    // if selectLetter does not contain tile, add tile to the array, color letter to indicate it's in the array.
    
    const toggleLetter = (r_index, c_index) => {
        if (arrayIncluded(selectLetter, [r_index, c_index])) {
            setSelectLetter(selectLetter.filter(item => !arrayEqual(item, [r_index, c_index])))
        } else {
            setSelectLetter([...selectLetter, [r_index, c_index]])
            console.log("select letter", selectLetter)
        }
    }

    return (
        <div className="container">
        <div className="puzzle">
            {puzzle.map((row, r_index) => 
                <div key={r_index + row} className="row">
                    {row.map((tile, c_index) => 
                        <div key={c_index + tile} className={arrayIncluded(selectLetter, [r_index, c_index]) ? "selectedTile tile" : "tile"} onClick={() => toggleLetter(r_index, c_index)}>
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