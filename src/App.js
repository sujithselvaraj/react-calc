import Calculator from "./Components/Calculator/Calculator"
import './App.css';

function App() {
  function handleMove(){
    document.getElementById('test').focus()
  }
  return (
  
    <div className="app" onMouseMove={handleMove} onClick={handleMove}>
     <Calculator/>
    </div>
    
  );
}

export default App;
