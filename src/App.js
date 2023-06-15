import Calculator from "./Components/Calculator/Calculator"
import './App.css';
import React from "react";

function App() {
  function handleMove(){
    document.getElementById('test').focus()
  }
  return (
  
    <div className="app" onClick={handleMove} onMouseMove={handleMove} >
     <Calculator/>
    </div>
    
  );
}

export default App;



