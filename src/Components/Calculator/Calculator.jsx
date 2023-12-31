import React, { createContext, useState } from 'react'
import Numpad from '../Numpad/Numpad';
import "../Buttons/Button.css"
import ResultArea from '../ResultArea/ResultArea';

export const ExpContext=createContext();

const Calculator = () => {

  const [expression,setExpression]=useState("0");
  const [isPerformed,setPerformed]=useState(false);
  const [lastOperation,setLastOperation]=useState("");
  const [prevExpression,setPrevExpression]=useState("");

   const dependencies={expression,setExpression,lastOperation,setLastOperation,isPerformed,setPerformed,prevExpression,setPrevExpression};

  return (

    <ExpContext.Provider value={dependencies}>
{/* <h1 >Calculator</h1> */}
     <div className='calculator'>
      
        <ResultArea />
        <Numpad />
     </div>
     </ExpContext.Provider>
  );
}

export default Calculator;

