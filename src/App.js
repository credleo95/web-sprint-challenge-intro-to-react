import React from 'react';
import {useState, useEffect } from 'react';
import ReactDOM from 'react-dom'; 
import axios from 'axios';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [characters, setCharacters] = useState('')

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const peopleUrl = 'https://swapi.dev/api/people/'
useEffect(() => {
axios.get(`${peopleUrl}`)
.then((response) => {
  setCharacters(response.data);
  console.log(response.data[0].name);
  console.log(response.data[0].birth_year);
})
.catch((error) => {
  console.log(error); 
})
}, [])
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
