import React, { createContext, useState } from 'react'
import Numpad from '../Numpad/Numpad';
import "./Calculator.css"
import Display from '../Display/Display';

export const ExpContext=createContext();
const Calculator = () => {

  const [exp,setExp]=useState("0");
  const [isPerformed,setPerformed]=useState(false);
  const [lastOperation,setLastOperation]=useState("");
  const [prevExp,setPrevExp]=useState("");




   const dependencies={exp,setExp,lastOperation,setLastOperation,isPerformed,setPerformed,prevExp,setPrevExp};

  return (

    <ExpContext.Provider value={dependencies}>

     <div className='calculator'>
        <Display/>
        <Numpad />
     </div>
     </ExpContext.Provider>
  );
}

export default React.memo(Calculator);