import React, {  useEffect,  useState } from 'react'
import "./App.css";
import axios from 'axios';

import SmurfContext from '../contexts/contexts';

import SmurfsPlural from './SmurfsPlural';

const App = ()=>{

  const [smurfs, setSmurfs] = useState([])
 
    useEffect(()=>{
    axios.get(`http://localhost:3333/smurfs`)
    .then(res => {
      console.log(res.data)
      setSmurfs(res.data);
      console.log(smurfs)
    })
    .catch(err => console.log(err))
  },[])

  
    return (
      <SmurfContext.Provider value={[smurfs, setSmurfs]}>
        <div className="App">
          <SmurfsPlural/>
        </div>
      </SmurfContext.Provider>
    );
  
}

export default App;
