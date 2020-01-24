import React, {useContext} from 'react';
import SmurfContext from '../contexts/contexts';

function SmurfsPlural(props) {


    const [smurfs, setSmurfs] = useContext(SmurfContext)
    return (
        <div>
            {smurfs.map(smurf => {
             return (
             <div className="card">
                 <div>name: {smurf.name}</div>
                 <div>height: {smurf.height}</div>
                 <div>age: {smurf.age}</div>
             </div>
             )
            })}
        </div>
    );
}

export default SmurfsPlural;