import React from 'react';
import {useState, useEffect } from 'react';
import ReactDOM from 'react-dom'; 
import axios from 'axios';
import './App.css';
import Character from './components/Character'


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
})
.catch((error) => {
  console.log(error); 
})
}, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character  userData={characters}/>
    </div>
  );
  
}

export default App;
