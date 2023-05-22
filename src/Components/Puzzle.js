import React, { useState, useEffect } from "react";
import wordSearch from "../utils/wordSearch-generator";
import arrayIncluded from "../utils/arrayIncluded";
import arrayEqual from "../utils/arrayEqual";
import inLine from "../utils/inLine";
import "./Puzzle.scss";
import axios from "axios";
import Modal from "./Modal";

const Puzzle = (props) => {
    const colors = ["red", "orange", "yellow", "green", "lt-blue", "purple", "pink", "peach", "lt-grey"]
    const [color, setColor] = useState(8)
    const fonts = ["bookman", "comicsans", "impact", "default-font", "lucida"]
    const [puzzle, setPuzzle] = useState([[]])
    const [selectLetter, setSelectLetter] = useState([])
    const [solved, setSolved] = useState([])
    const [font, setFont] = useState(3)
    const [title, setTitle] = useState("")
    const [setModal] = useState(false);
    const [wordlist, setWordlist] = useState([].map(item => {
        return {
            word: item,
            solved: false
        }
    }))

    useEffect(() => {
        axios
            .get(`https://wordsurge.xyz/api/wordlists/${props.match.params.id}`)
            .then(response => {
                let words = response.data.wordlist.split(",").map(item => {
                    return {
                        word: item[0].toUpperCase() + item.slice(1),
                        solved: false
                    }
                })
                setTitle(response.data.title)
                setWordlist(words)

                let charCount = words.reduce((acc, word) => {
                    return acc + word.word.length
                }, 0)

                let width = Math.ceil(Math.sqrt(charCount * 2))

                let longest = words.sort((a,b) => a.length - b.length)[0].word.length;
                longest = longest > 15 ? longest : 15;
                if (props.hard) {
                    if (charCount >= 150) {
                    setPuzzle(wordSearch(words.map(item => item.word.toUpperCase().split(" ").join("")), width, width, 2))
                    } else {
                    setPuzzle(wordSearch(words.map(item => item.word.toUpperCase().split(" ").join("")), longest + 1, longest + 1, 2))
                    }
                } else {
                    if (charCount >= 150){
                    setPuzzle(wordSearch(words.map(item => item.word.toUpperCase().split(" ").join("")), width, width, 1))
                    } else {
                    setPuzzle(wordSearch(words.map(item => item.word.toUpperCase().split(" ").join("")), longest + 1, longest + 1, 1))
                    }
                }
                
            })            
            .catch(err => {
                console.log("Error: ", err)
            })
    }, [props.match.params.id, props.hard])
    
    // When letters in the array are 'Matched' to a wordlist word - change letter background colors,
    // *add to solved array*, cross word from the list.
    useEffect(() => {
        
        let sortedSelect = selectLetter.map(item => puzzle[item[0]][item[1]]).sort()
        
        wordlist.forEach(item => {
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
        }
    }

    const showModal = () => {
        setModal(true)
    }

    return (
        <div data-aos="fade-up" className="container">
        <div className={`puzzle ${fonts[font]} ${colors[color]}`} style={{padding: "auto .25", width: puzzle.length > 20 ? "40vw" : ""}}>
            {(wordlist.length > 0 && wordlist.length === wordlist.filter(item => item.solved).length) 
            ? 
            (
                
                <Modal modal={showModal} />
                

            ) 
            : 
            ""
            }
            
            <h3>{title}</h3>
            {wordlist.length === 0 ? <h3 className="loading">Loading ...</h3> : puzzle.map((row, r_index) => 
                <div key={r_index + row} className="row">
                    {row.map((tile, c_index) =>                
                        <div key={c_index + tile}  className={arrayIncluded(selectLetter, [r_index, c_index])                        
                            ? "selectedTile tile" 
                            : arrayIncluded(solved, [r_index, c_index])
                                ? "solvedTile tile"
                                : "tile"} onClick={() => toggleLetter(r_index, c_index)}>
                            {tile}
                        </div>
                    )}
                </div>
            )}
            <div className="button-space">
                {wordlist.length > 0 ? <button className="font-button manage-button" onClick={_ => setFont((font + 1) % 5)}>Change font</button> : null }
                {wordlist.length > 0 ? <button className="small-font manage-button" onClick={_ => setColor((color + 1) % 9)}>Change background</button> : null }
            </div>
        </div>
        <div className="word-list">
            {wordlist.map(word => 
            <p key={word.word} className={word.solved ? "crossedOut word" : "word"}>{word.word}</p>
            )}
        </div>  
    </div>
    )
}

export default Puzzle;