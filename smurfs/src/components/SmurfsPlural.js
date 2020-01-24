import React, {useContext, useState, useEffect} from 'react';
import SmurfContext from '../contexts/contexts';
import axios from 'axios';

function SmurfsPlural(props) {

    const [deleteThisSmurf, setDeleteThisSmurf] = useState({})
    const [smurfs, setSmurfs] = useContext(SmurfContext)

    useEffect(()=> {
        axios.delete(`http://localhost:3333/smurfs/${deleteThisSmurf.id}`)
            .then(res => {console.log(res)})
            .catch(err => {console.log(err)})
    }, [deleteThisSmurf])
    return (
        <div>
            {smurfs.map(smurf => {
             return (
             <div className="card">
                 <div>name: {smurf.name}</div>
                 <div>height: {smurf.height}</div>
                 <div>age: {smurf.age}</div>
                 <button onClick={() => {
                     setDeleteThisSmurf({...smurf})
                 }}>Delete Smurf</button>
             </div>
             )
            })}
        </div>
    );
}

export default SmurfsPlural;