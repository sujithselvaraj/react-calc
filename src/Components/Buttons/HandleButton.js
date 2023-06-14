import Calc from "./Calc";

function peek(value){
    return value.charAt(value.length-1);
  }

  //trim the function automatically according to the wrong exp given
  function trim(value,limit){
    return value.substring(0,value.length-limit);

  }
  //to check wheather the value is an operator or not
  function isOperator(value){
    return (value==="+" || value==="-" || value==="*" || value==="/" || value==="%");
  }

    //to handle the operations performed by the buttons present on the web page
  function HandleButton(e,data){


    const {exp,setExp,setLastOperation,setPerformed,setPrevExp}=data;

    let value=e.target.textContent;
    var temp=exp.toString();

    //if user prresses the 'c'
    if(value==='C')
    {
      temp="0";
    }

    if(value==="." && exp==="0")
    {
        temp=exp+".";
    }

    //if user presses the delete function ....delete the last most peek element and set the value to setprevexp 
    if(value==="DEL")
    {
      if(temp==="0")
      {
        temp="0";
      }
      temp=temp.substring(0,temp.length-1);
      setPrevExp(temp);
    }

    //12+ next point occurs it changes to 12+0.
    if(value==="." && isOperator(peek(temp)))
    {
      temp=temp+"0"+value;
    }

    //already minus is there and again - it ll make it as plus
    if(value==="-" && peek(temp)==="-" && !isNaN(peek(trim(temp,1))))
    {
        // console.log("button");
      temp=trim(temp,1)+ "+";
    }

    
    //if operator comes
    if(isOperator(value))
    {
      setLastOperation("");
      setPerformed(false);
        //if operator comes and the next user presses the . it concatenates 0 before that
      if(peek(temp)==='.')
      {
        temp=temp+"0"+value;
      }
    }

    setExp(temp.toString());

    //if user presses the =
    if(value==="=")
    {
      Calc(data);
      return;
    }

    var regexp =    /^(-|-?\d+|-?\d+\.|-?\d+\.\d+|-?\d+(\.\d+)?[+\-/%*]|(-?\d+(\.\d+)?[+\-/%*])+-|(-?\d+(\.\d+)?[+\-/%*])+-?\d+|(-?\d+(\.\d+)?[+\-/%*])+-?\d+\.|(-?\d+(\.\d+)?[+\-/%*])+-?\d+\.\d+|(-?\d+(\.\d+)?[+\-/%*])+-?\d+(\.\d+)?[+\-/%*])$/;

    if(temp==="0")
    {
      temp="";
    }

    //if the last value is an operator && last value is not an number like . && 
    if(isNaN(peek(temp)) && isNaN(value) && value!=="-" && value!==".")
    {
      temp=trim(temp,1);
    }


    if(isNaN(value) && (peek(temp)==="+"|| peek(temp)==='-'))
    {
      temp=trim(temp,1);
    }

    //if an expression length is equal to 1 prevexp is set with temp+value
    if(exp.length===1)
    {
      setPrevExp(temp+value);
    }

    if(regexp.test(temp+value))
    {
      setExp(temp+value);
    }

    return;

  };
export default HandleButton;