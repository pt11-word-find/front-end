import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Puzzle from "./Puzzle";
import "../App.scss"

const AddWordList = (props) => {
  const [wordList, setWordList] = useState({
    title: "",
    wordlist: ""
  })

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
        <label htmlFor="title"><h2>Title</h2></label>
          <input className="text_area1"
            type="text"
            name="title"
            placeholder="Add a title for your Puzzle"
            value={wordList.title}
            onChange={handleChange}
          />
        <label htmlFor="source"><h2>Puzzle Source</h2></label>
          <textarea className="text_area"
            type="text"
            name="wordlist"
            placeholder="Add your words separated by a comma"
            value={wordList.wordlist}
            onChange={handleChange}
            />
        <button className="bt1" type="submit">Create Puzzle</button>
        
      </form>
      <Puzzle />
      </>
    )
}

export default AddWordList;