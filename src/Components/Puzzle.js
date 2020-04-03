import React, { useState, useEffect, useContext } from "react";
import wordSearch from "../utils/wordSearch-generator";
import arrayIncluded from "../utils/arrayIncluded";
import arrayEqual from "../utils/arrayEqual";
import stars from "../images/stars.svg";
import inLine from "../utils/inLine";
import WordContext from "../contexts/WordContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Puzzle = (props) => {
    const {puzzles, setPuzzles} = useContext(WordContext)
    const [puzzle, setPuzzle] = useState([[]])
    const [selectLetter, setSelectLetter] = useState([])
    const [solved, setSolved] = useState([])
    const [wordlist, setWordlist] = useState([
        // "eggs",
        // "sugar",
        // "butter",
        // "flour",
        // "vanilla"
    ].map(item => {
        return {
            word: item,
            solved: false
        }
    }))

    useEffect(() => {
        axios
            .get(`https://wordlist-backend.herokuapp.com/wordlists/${props.match.params.id}`)
            .then(response => {
                console.log(response)
                let words = response.data.wordlist.split(",").map(item => {
                    return {
                        word: item.split(" ").join(""),
                        solved: false
                    }
                })
                setWordlist(words)
                console.log("words", words)
                setPuzzle(wordSearch(words.map(item => item.word.toUpperCase()), 15, 15, 1))
            })
            .catch(err => {
                console.log("Error: ", err)
            })
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
        if (wordlist.length === wordlist.filter(item => item.solved).length) return
        if (arrayIncluded(selectLetter, [r_index, c_index])) {
            setSelectLetter(selectLetter.filter(item => !arrayEqual(item, [r_index, c_index])))
        } else {
            if (inLine(selectLetter, [r_index, c_index], puzzle)) {
            setSelectLetter([...selectLetter, [r_index, c_index]])
            } else {
                setSelectLetter([[r_index, c_index]])
            }
            console.log("select letter", selectLetter)
        }
    }

    const handleDelete = puzzles => {
        console.log("Props: ", puzzles)
        axiosWithAuth()
          .delete(`/auth/wordlists/${puzzles.id}`)
          .then(response => {
            console.log("Response Data: ", response.data)
            setPuzzles(puzzles.filter(item => item.id !== puzzles.id))
          })
          .catch(err => console.log("Error in Delete Function: ", err))
        }

    return (
        <div className="container">
        <div className="puzzle">
            {(wordlist.length === wordlist.filter(item => item.solved).length) 
            ? 
            (
                <div>
                    <img src={stars} alt="star graphic"></img>
                    <br />
                    <Link to="/puzzles"><button type="submit" className="bt1">New Puzzle</button></Link>
                    <Link to="/puzzles"><button type="submit" className="bt1" onClick={() => handleDelete(puzzles)}>Delete Puzzle</button></Link>
                </div>
            ) 
            : 
            ""
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