import React, { useEffect, useState } from "react";
import apiRequest from "../apiRequest";

function Add() {
  // data from data.json
  const url = "http://localhost:3500/FlashCards";
  const [cardsData, setCardsData] = useState()
  const [formData, setFormData] = useState({
    "projectName": "",
    "word": "",
    "answer": ""
  });
  // useEffect
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url)
      const data = await res.json()
      setCardsData(data)
    }
    setTimeout(() => {
      (async () => await fetchData())();
    }, 2000)
}, [])
  // functions
  function handleInput(event) {
    const { value, name } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  const handlePost = async () => {
    const optionsObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }
    const result = await apiRequest(url, optionsObj);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
      handlePost()
    }
  return (
    <div className="App">
      <nav className="per_nav">
        <button className="home icon"></button>
        <div className="sp_nav">
          <button className="edit icon"></button>
          <button className="folder icon"></button>
        </div>
      </nav>
      <form onSubmit={handleSubmit}>
        <label>Flash Cards Name</label>
        {/* {checkCorrect === true && 'This Folder is already exit'} */}
        <input
          type="text"
          name="projectName"
          onChange={handleInput}
          value={formData.projectName}
          placeholder=""
        />
        <label>Word</label>
        <input
          type="text"
          name="word"
          onChange={handleInput}
          value={formData.word}
          placeholder=""
        />
        <label>Answer</label>
        <input
          type="text"
          name="answer"
          className="answer"
          onChange={handleInput}
          value={formData.answer}
          placeholder=""
        />
        <button type="submit">Add</button>
        {/* just test */}
        {cardsData && cardsData.map(element => {
          return(element.answer)
        })}
      </form>
    </div>
  );
}

export default Add;
