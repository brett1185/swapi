import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Form from './components/form';
import Planet from './components/disPlanet';
import Person from './components/disPerson';



function App() {
  const [id, setId]=useState('')
  


  return (
    <BrowserRouter>
    <div className="App">
        <Form id={id} setId={setId}/>
        <Routes>
          <Route path='/planets/:id' element={<Planet  id={id}/>}/>
          <Route path='/people/:id'element={<Person  id={id}/>}/>
        </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
