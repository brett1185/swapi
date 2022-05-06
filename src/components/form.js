import React, {useState} from 'react'
import { useNavigate } from 'react-router';


const Form=(props)=>{
    const {id, setId}=props

    const[personPlanet, setPersonPlanet]=useState('')
    const navigate=useNavigate()

    const selectView=(e)=>{
            e.preventDefault()
            navigate(`/${personPlanet}/${id}`)}


        return(
        <div>
            <form onSubmit={selectView}>
                <label>Search for: </label>
                <select onChange={(e)=>setPersonPlanet(e.target.value)}>
                    <option value='people'>people</option>
                    <option value='planets'>planets</option>
                </select>
                <label>ID: </label>
                <input type='text' value={id} onChange={(e)=>setId(e.target.value)}/>
                <button>Search</button>

            </form>

        </div>

        )

}

export default Form
