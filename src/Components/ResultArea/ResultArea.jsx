import React, { useContext, useEffect} from 'react'
import "../Buttons/Button.css"
import { ExpContext } from '../Calculator/Calculator'
import Calc from '../Buttons/Calc'
import HandleDisplay from "./HandleDisplay"

function ResultArea(){

let data=useContext(ExpContext);

function handleInput(e)
{
  HandleDisplay(e,data);
};

function handleKeyDown(e){
  const { expression, setExpression } =data;

    if(e.code==="Backspace" && expression.length ===1){
        setExpression("");
    }
    if(e.code==="Enter"){
        Calc(data);
    }
};

function handleClick(data){
  const {expression,setExpression}=data;

  if(expression==="0")
  {
      setExpression("");
  }
};

useEffect(()=>{
  document.getElementById("test").focus()

},[data.expression])


  return (
    <input className='display'  id="test" type='text' value={data.expression}  onKeyDown={handleKeyDown} onInput={handleInput} onClick={handleClick} aria-label='result-box' />
  );
};

export default ResultArea;