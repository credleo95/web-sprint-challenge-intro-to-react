// Write your Character component here
import React from 'react';
import {useState, useEffect } from 'react';
import ReactDOM from 'react-dom'; 
import axios from 'axios';

export default function Character(props){
 const {userData} = props
 
 return (
     <div>
   {/* {userData.map((character) => {
    return (
        <div>
            <h1> {character.name} </h1>
            <h2> {character.gender}</h2>
            <div>
               <p>{character.name} was born in the year {character.birth_year}</p>
               <br/>
               <p>{character.name} has {character.eye_color} eyes, and {character.hair_color} hair.</p> 
            </div>
        </div>
    )
})
}; */}

<h1>Hello from the Character Component.</h1>
</div>);
};