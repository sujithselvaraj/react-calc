import React, { useContext } from 'react'
import "./Button.css"
import { ExpContext } from '../Calculator/Calculator'
import HandleButton from './HandleButton';

function Button({value,className}){

  const data=useContext(ExpContext);

    function handleButtonClick(e)
    {
      HandleButton(e,data);
    };

  return (
    <button className={className} onClick={handleButtonClick} >
        {/* {value}        */}
        <div role='button' aria-label='button'>{value}</div>
    </button>
  );
};

export default Button;