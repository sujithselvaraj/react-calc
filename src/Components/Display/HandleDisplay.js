

function peek(val){
    return val.charAt(val.length-1);
}

function trim(val,lim){
    return val.substring(0,val.length-lim);
}

function mpeek(exp){
    return exp.substring(0,exp.length-1).charAt(exp.length-2);
}

function isOperator(value){
    return value==="+"||value==="-"||value==="*"||value==="/"||value==="%";
}

function HandleDisplay(e,data)
{
    const{setExp,setLastOperation,setPerformed,prevExp,setPrevExp}=data;

    let temp=e.target.value;

    var regexp = /^(-|-?\d+|-?\d+\.|-?\d+\.\d+|-?\d+(\.\d+)?[+\-/%*]|(-?\d+(\.\d+)?[+\-/%*])+-|(-?\d+(\.\d+)?[+\-/%*])+-?\d+|(-?\d+(\.\d+)?[+\-/%*])+-?\d+\.|(-?\d+(\.\d+)?[+\-/%*])+-?\d+\.\d+|(-?\d+(\.\d+)?[+\-/%*])+-?\d+(\.\d+)?[+\-/%*])$/;

    var value=peek(temp);

    //if 2 minus occurs consecutively it ll make it as a plus
    if(value==="-" && mpeek(temp)==="-" && !isNaN(mpeek(trim(temp,1))))
    {
        temp=trim(temp,2)+"+";
    }
   

    if(isOperator(value))
    {


        setLastOperation("");
        setPerformed(false);

        if(mpeek(temp)===".")
        {
            temp=trim(temp,1)+"0"+value;
        }
        //if consecutve minus not occurs ,other occurs replace old with new operator
        if(value!=="-" && isOperator(mpeek(temp)))
        {
            temp=trim(temp,2)+value;
        }
    }

    //if the entered value is point and the second last is an operator it concatenates 0 with that
    if(value==="." && isOperator(mpeek(temp)))
    {

        temp=trim(temp,1)+'0'+value;
    }


    if(isNaN(mpeek(temp)) && isNaN(value) && (value==="+" || value==="/" || value==="*" || value==="%" )&& value!=="-" && value!==".")
    {

        temp=trim(temp,2)+value;
        setPrevExp(temp);
        return;
    }

    if(isNaN(value) && isNaN(mpeek(temp)) && (mpeek(temp)==="+" || mpeek(temp)==="-"))
    {

        temp=trim(temp,2)+value;
    }

    var res=regexp.test(temp);
    if(!res)
    {

        temp=prevExp;
    }

    setExp(temp.toString());
    setPrevExp(temp);

};

export default HandleDisplay;