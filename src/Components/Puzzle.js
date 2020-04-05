import React, { useState, useEffect, useContext } from "react";
import wordSearch from "../utils/wordSearch-generator";
import arrayIncluded from "../utils/arrayIncluded";
import arrayEqual from "../utils/arrayEqual";
import stars from "../images/stars.svg";
import inLine from "../utils/inLine";
import WordContext from "../contexts/WordContext";
import { Link } from "react-router-dom";
import "./Puzzle.scss";
import axios from "axios";
import Modal from "./Modal";

const Puzzle = (props) => {
    const colors = ["#FF0000", "FF8C00", "FFFF00", "00FF00", "87CEFA", "7B68EE", "EE82EE", "#FFEFD5"]
    const fonts = ["bookman", "comicsans", "impact", "default-font", "lucida"]
    const {puzzles, setPuzzles} = useContext(WordContext)
    const [puzzle, setPuzzle] = useState([[]])
    const [selectLetter, setSelectLetter] = useState([])
    const [solved, setSolved] = useState([])
    const [font, setFont] = useState(3)
    const [modal, setModal] = useState(false);
    const [wordlist, setWordlist] = useState([].map(item => {
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
                        word: item[0].toUpperCase() + item.slice(1),
                        solved: false
                    }  
                })
                setWordlist(words)
                console.log("words", words.sort((a,b) => a.length - b.length))
                let longest = words.sort((a,b) => a.length - b.length)[0].word.length;
                console.log("longest", longest)
                longest = longest > 15 ? longest : 15;
                console.log("longest", longest)
                setPuzzle(wordSearch(words.map(item => item.word.toUpperCase().split(" ").join("")), longest + 1, longest+ 1, 1))
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
            if (arrayEqual(sortedSelect, item.word.toUpperCase().split(" ").join("").split("").sort())) { 
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

    const showModal = () => {
        setModal(true)
    }

    const hideModal = () => {
        setModal(false)
    }

    return (
        <div data-aos="fade-up" className="container">
        <div style={{width: puzzle.length > 20 ? "50vmax" : ""}} className={`puzzle ${fonts[font]}`}>
            {(wordlist.length > 0 && wordlist.length === wordlist.filter(item => item.solved).length) 
            ? 
            (
                
                <Modal modal={showModal} />
                

            ) 
            : 
            ""
            }
            
            <br />
            {wordlist.length === 0 ? <h3 className="loading">Loading ...</h3> : puzzle.map((row, r_index) => 
                <div key={r_index + row} className="row">
                    {row.map((tile, c_index) => 
                        <div key={c_index + tile} style={{width: row.length > 20 ? `${100/row.length}%`: "25px"}} className={arrayIncluded(selectLetter, [r_index, c_index]) 
                        
                            ? "selectedTile tile" 
                            : arrayIncluded(solved, [r_index, c_index])
                                ? "solvedTile tile"
                                : "tile"} onClick={() => toggleLetter(r_index, c_index)}>
                            {tile}
                        </div>
                    )}
                </div>
            )}
            {wordlist.length > 0 ? <button className="manage-button" onClick={_ => setFont( (font + 1) % 5 )}>Change font</button> : null }
        </div>
        <div className="word-list">
            {wordlist.map(word => 
            <p className={word.solved ? "crossedOut word" : "word"}>{word.word}</p>
            )}
            {/* {wordlist.length > 0 ? <button className="manage-button" onClick={_ => setFont( (font + 1) % 5 )}>Toggle font</button> : null } */}
        </div>
        
    </div>
    )
}

export default Puzzle;