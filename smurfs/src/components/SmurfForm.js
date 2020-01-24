import React, { useState, useEffect} from 'react';


import axios from 'axios'

function SmurfForm(props) {

    
    const [newSmurf, setNewSmurf] = useState({})
    const[postThisSmurf, setPostThisSmurf] = useState({})

    useEffect(()=> {
        axios.post('http://localhost:3333/smurfs', postThisSmurf)
            .then(res => {console.log(res)})
            .catch(err => {console.log(err)})
    }, [postThisSmurf])

   const  handleChange = e => {
       if(e.target.id === 'smurfname'){
           setNewSmurf({
               ...newSmurf,
               name: e.target.value,
                id: Date.now()
           })
       } else if(e.target.id === 'smurfage'){
           setNewSmurf({
               ...newSmurf,
               age: e.target.value
           })
       } else if(e.target.id === 'smurfheight'){
           setNewSmurf({
               ...newSmurf,
               height: e.target.value
           })
       }
    }
    return (
        <form
      onChange={handleChange}
      //need to make on submit function with post request
    onSubmit={e => {
        e.preventDefault();
        const fields = document.querySelectorAll("input");
        const fieldsList = Array.from(fields);
       fieldsList.map(function(field){field.value =""})
       console.log(newSmurf)
       setPostThisSmurf(newSmurf)
      }}
    >
      <label for="smurfname">
        <input type="text" id="smurfname" placeholder="smurfname" />
      </label>
      <label for="smurfage">
        <input type="text" id="smurfage" placeholder="smurfage" />
      </label>
         <label for="smurfheight">
        <input type="text" id="smurfheight" placeholder="smurfheight" />
      </label>
      <button>Submit</button>
    </form>
    );
}

export default SmurfForm;