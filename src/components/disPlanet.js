import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Planet=(props)=>{
    const[planets, setPlanets]=useState({});
    const {id}=props

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then((res)=>{
            console.log(res.data);
            setPlanets(res.data)})
            .catch((err)=>console.log(err))
    },[id])
        

return(
    <div>
        <h1>{planets.name}</h1>
        <p>Climate: {planets.climate}</p>
        <p>Terrain: {planets.terrain}</p>
        <p>Gravity: {planets.gravity}</p>
        <p>Population: {planets.population}</p>
    </div>
)}

export default Planet
