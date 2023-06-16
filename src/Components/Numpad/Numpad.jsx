import React from 'react'
import keys from './keys';
import "../Buttons/Button.css";
import Button from '../Buttons/Button';


function Numpad(){

  return (
   <div className='num-pad'>
    {
    keys.map((key,index)=>{
      return  (
        <Button key={index} value={key.value}   className={"number "+key.class} />
      );
    })
  }
   
</div>
    
    
  );
};

export default Numpad;