import React, {useEffect, useState}from 'react'
import axios from 'axios'

const Person=(props)=>{

const[people, setPeople]=useState({})
const {id}=props


useEffect(()=>{
    axios.get(`https://swapi.dev/api/people/${id}`)
    .then ((res)=>{
    console.log(res.data);
    setPeople(res.data)})
    .catch((err)=>console.log(err))}, [id])


return(
    <div>
        <h1>{people.name}</h1>
        <p>Height: {people.height}</p>
        <p>Hair color: {people.hair_color}</p>
        <p>Eye color: {people.eye_color}</p>
        <p>Skin color: {people.skin_color}</p>
    </div>
)}

export default Person