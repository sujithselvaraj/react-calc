import React, { useContext, useEffect } from 'react'
import "./Display.css"
import { ExpContext } from '../Calculator/Calculator'
import HandleClick from "./HandleClick"
import HandleKeyDown from "./HandleKeyDown"
import HandleDisplay from "./HandleDisplay"

function Display(){

let data=useContext(ExpContext);

function handleInput(e)
{
  HandleDisplay(e,data);
};

function handleKeyDown(e){
  HandleKeyDown(e,data);
};

function handleClick(e){
  HandleClick(e,data);
};

useEffect(()=>{
  document.getElementById("test").focus()

},[data.exp])


  return (
    <input className='display'  id="test" type='text' value={data.exp}  onLoad={()=>this.focus()} onKeyDown={handleKeyDown} onInput={handleInput} onClick={handleClick}   />
  );
};

export default React.memo(Display);