import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddWordList = (props) => {
  const [wordList, setWordList] = useState({
    title: "",
    wordlist: ""

  })
  
  const [err, setError] = useState("")

  const handleChange = event => {
    setWordList({ ...wordList, [event.target.name]: event.target.value });
    };

  const submitForm = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("/wordlists", wordList)
      .then(response => {
        setWordList({
          title: "",
          wordlist: "",
       
        })
        props.history.push("/managepuzzles")
      })
      .catch(err => {
        if (err.response) {
          if (err.response.status === 401) {
            setError("Your session has expired, please log in again")
          } else if (err.response.status === 400) {
            setError("Please provide a title and word list")
          }
        }
      })
    };

    return (
      <>
      <form className="puzzle-form" onSubmit={submitForm}>
      <label htmlFor="source">Title</label>
          <textarea
            type="text"
            name="title"
            placeholder="Add a title for your puzzle"
            value={wordList.title}
            onChange={handleChange}
            />
        <label htmlFor="source">Words</label>
          <textarea
            type="text"
            name="wordlist"
            placeholder="Add your words separated by a comma"
            value={wordList.wordlist}
            onChange={handleChange}
            />
        <p style={{color: "red", marginTop: "10px"}}>{err}</p>
        <button type="submit">Create Puzzle</button>
        
      </form>
     
      </>
    )
}

export default AddWordList;