import React, {useState, useEffect} from "react";
import axiosWithAuth from "../utils/axiosWithAuth"
import "./Admin.scss"

export default function Admin() {
    const [wordlists, setWordlists] = useState([])
    useEffect(_ => {
        axiosWithAuth()
            .get("wordlists/all")
                .then(res => {
                    setWordlists(res.data.filter(item => !item.approved).sort((a,b) => a.id - b.id))
                })
                .catch(err => console.log(err.response))
    },[])

    const handleApprove = id => {
        axiosWithAuth()
            .put(`wordlists/approve/${id}`)
                .then(res => {
                    let oldItem = wordlists.find(item => item.id === id)
                    setWordlists([...wordlists.filter(item => item.id !== id), {...oldItem, approved:true}].sort((a,b) => a.id - b.id))
                })
                .catch(err => console.log(err))
    }


    const handleDelete = id => {
        axiosWithAuth()
            .delete(`wordlists/${id}`)
            .then(res => {
                setWordlists(wordlists.filter(item => item.id !== id))
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="admin-panel">

            {wordlists.length > 0 ? wordlists.map(item => 
                <div style={{background: item.approved ? "green": "moccasin"}} className="wordlist-admin-card">
                    <p>Id: {item.id} User id: {item.user_id}</p>
                    <h3>{item.title}</h3>
                    <p>{item.wordlist}</p>
                    <button onClick={_ => handleApprove(item.id)}>Approve Wordlist</button>
                    <button onClick={_ => handleDelete(item.id)} style={{background: "red"}}>Delete Wordlist</button>
                </div>
            )
            : <h2>No wordlists pending approval!</h2>
        }

        </div>



    )

}