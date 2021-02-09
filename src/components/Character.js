// Write your Character component here
import React from 'react';
import {useState, useEffect } from 'react';
import ReactDOM from 'react-dom'; 
import axios from 'axios';
import styled from 'styled-components'; 

const FlexDiv = styled.div`
    display: flex; 
`;

const ContainerDiv = styled.div`
    border: 2px solid black; 
    border-radius: 30px; 
    background-color: rgb(153, 187, 201, .6); 
    color: white; 
    width: 100%; 
    margin: 10px; 
`;
const StyledSection = styled.section`
    border: 2px solid black; 
    border-radius: 30px; 
`;
const StyledP = styled.p`
    color: black; 
`;

export default function Character(props){ 
 const {userData} = props
 
 return (
     <div>
         {userData.map((character) => {
return (
    <div className='parent-div'>
        <div>
    <ContainerDiv>
        <StyledSection>
            <h1> Name: {character.name}  </h1>
            <h2> Gender: {character.gender} </h2>
        </StyledSection>
        <div>
           <StyledP>{character.name} was born in the year {character.birth_year}</StyledP>
           <StyledP>{character.name} has {character.eye_color} eyes, and {character.hair_color} hair.</StyledP> 
        </div>
   </ContainerDiv>
        </div>
   </div>
)}) 
}
 </div>  
 )
}     
        
        
