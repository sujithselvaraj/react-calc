import React from 'react'
import keys from './keys';
import "./Numpad.css";
import Button from '../Buttons/Button';


function Numpad(){

  return (
    <div className='num-pad'>
        {
        keys.map((key,index)=>{
                return  (
                <Button key={index} value={key.value}   className={(key.class) ? "number "+key.class : "number"} />
                );
        })
        }
       
    </div>
  );
};

export default React.memo(Numpad);