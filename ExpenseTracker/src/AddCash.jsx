import React from 'react';
import { useState } from 'react/cjs/react.development';
import ShowExpence from "./showExpence";


function AddCash(props) {
  const[income,Setincome]=useState()
  const[des,Setdes]=useState()
  
 

  const addIncome=(e)=>{
   Setincome(e.target.value)
  }

  const addText =(e)=>{
    Setdes(e.target.value)
  }

  return (
    <div>
      <div className={"heading"}>
        <div>
          Text <br/>
          <input onChange={(e)=>addText(e)} ></input>
          
        </div>
      <input onChange={(e)=>addIncome(e)} ></input>
    <button onClick={()=>props.func(income,des)}>add</button>
    </div>
   
    </div>
  );
}

export default AddCash;
