import Calc from "../Buttons/Calc";

function HandleKeyDown(e,data){

    const { exp, setExp } =data;

    if(e.code==="Backspace" && exp.length ===1){
        setExp("");
    }
    if(e.code==="Enter"){
        Calc(data);
    }
}

export default HandleKeyDown;