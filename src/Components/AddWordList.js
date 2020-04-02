import React, { useEffect, useState, useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Puzzle from "./Puzzle";
import WordContext from "../contexts/WordContext";
const AddWordList = (props) => {
  const [wordList, setWordList] = useState({
    title: "",
    wordlist: ""

  })
  const {puzzle, setPuzzle} = useContext(WordContext)

  const handleChange = event => {
    setWordList({ ...wordList, [event.target.name]: event.target.value });
    };
  
  const submitForm = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("/wordlists", wordList)
      .then(response => {
        console.log("post response", response)
        setWordList({
          title: "",
          wordlist: ""
        })
        props.history.push("/addWords")
      })
      .catch(err => console.log("Error in AddWordList", err))
    };

    return (
      <>
      <form className="puzzle-form" onSubmit={submitForm}>
      <label htmlFor="source">Puzzle Title</label>
          <textarea
            type="text"
            name="title"
            placeholder="Add a title for your puzzle"
            value={wordList.title}
            onChange={handleChange}
            />
        <label htmlFor="source">Puzzle Source</label>
          <textarea
            type="text"
            name="wordlist"
            placeholder="Add your words separated by a comma"
            value={wordList.wordlist}
            onChange={handleChange}
            />

        <button type="submit">Create Puzzle</button>
        
      </form>
      <Puzzle />
      </>
    )
}

export default AddWordList;