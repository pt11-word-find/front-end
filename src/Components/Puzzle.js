import React, { useState, useEffect } from "react";
import wordSearch from "../utils/wordSearch-generator";
import arrayIncluded from "../utils/arrayIncluded";
import arrayEqual from "../utils/arrayEqual";
import stars from "../images/stars.svg";

const Puzzle = () => {
    
    const [puzzle, setPuzzle] = useState([[]])
    const [selectLetter, setSelectLetter] = useState([])
    const [solved, setSolved] = useState([])
    const [wordlist, setWordlist] = useState([
        "eggs",
        "sugar",
        "butter",
        "flour",
        "vanilla"
    ].map(item => {
        return {
            word: item,
            solved: false
        }
    }))

    useEffect(() => {
        if (wordlist.length > 1) {
        setPuzzle(wordSearch(wordlist.map(item => item.word.toUpperCase()), 10, 10, 1))
        }
    }, [])
    


    // When letters in the array are 'Matched' to a wordlist word - change letter background colors,
    // *add to solved array*, cross word from the list or remove word from the list.
    useEffect(() => {
        
        let sortedSelect = selectLetter.map(item => puzzle[item[0]][item[1]]).sort()
        console.log("Solved array", solved)
        
        wordlist.map(item => {
            if (arrayEqual(sortedSelect, item.word.toUpperCase().split("").sort())) { 
                setWordlist([
                    ...wordlist.filter(oldWord => oldWord.word !== item.word), {
                        word: item.word,
                        solved: true
                    }
                 ])
                setSolved([...selectLetter, ...solved])
                setSelectLetter([])

            }

    }, [selectLetter])
})

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
            {(wordlist.length === wordlist.filter(item => item.solved).length) ? (<img src={stars}></img>) : ""
                // console.log("Solved", solved)
                // console.log("wordlist", wordlist)
                // console.log("Winner")
            }
            <br />
            {puzzle.map((row, r_index) => 
                <div key={r_index + row} className="row">
                    {row.map((tile, c_index) => 
                        <div key={c_index + tile} className={arrayIncluded(selectLetter, [r_index, c_index]) 
                            ? "selectedTile tile" 
                            : arrayIncluded(solved, [r_index, c_index])
                                ? "solvedTile tile"
                                : "tile"} onClick={() => toggleLetter(r_index, c_index)}>
                            {tile}
                        </div>
                    )}
                </div>
            )}

        </div>
        <div className="word-list">
            {wordlist.map(word => 
            <p className={word.solved ? "crossedOut" : ""}>{word.word}</p>
            
            )}
        </div>
    </div>
    )
}

export default Puzzle;