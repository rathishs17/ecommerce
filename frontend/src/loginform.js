import axios from 'axios';
import React, { useState } from 'react'

function Loginform() 
{
    const[username,setUsername]=useState();
    const[email,setEmail]=useState();
    const[password,setpassword]=useState();
    async function handleSubmit()
    {
        try{

            const data=await axios.post("http://localhost:5001/loginpage",{email:email,password:password});
            console.log(data);
            
        }
        catch(error)
        {
            console.log(error);
        }
    }
  return (
    <div>
      <input onChange={(e)=>setUsername(e.target.value)}></input>
      <input onChange={(e)=>setEmail(e.target.value)}></input>
      <input onChange={(e)=>setpassword(e.target.value)}></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Loginform
