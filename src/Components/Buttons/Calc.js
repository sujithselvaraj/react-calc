//last value
const peek=(value)=>{
    value=value.toString();
    return value.charAt(value.length-1);
};

//to check the precedence of the operator 
const Precedence=(op1,op2)=>{
    if(op2==="%")
    {
        return true;
    }
    if((op1==="*"||op1==="/") && (op2==="+" || op2==="-"))
    return false;
    else
    return true;
};


//perform operation 
const perform=(op,value1,value2)=>{
    value1=parseFloat(value1);
    value2=parseFloat(value2);
    switch(op)
    {
        case "+":
            return value2+value1;
        case "-":
            return value2-value1;
        case "*":
            return value2*value1;
        case "/":
            return value2/value1;
        case "%":
            return value2%value1;
        default:
            break;
    }
};


//Calc function
const Calc=(data)=>{
    const {exp,setExp,lastOperation,setLastOperation,isPerformed,setPerformed,setPrevExp}=data;
    var temp=exp.toString();

   

    if(temp==="")
    {
        setExp("");
    }

    //the last character is an operator trim the operator 
    while(isNaN(peek(temp)))
    {
        temp=temp.substring(0,temp.length-1);
    }

    if(!isPerformed && !isNaN(temp))
    {
        setExp(temp);
        return;
    }

   var  tempp=lastOperation;
    if(!isPerformed)
    {
        var i=exp.length-1;

        while((!isNaN(exp.charAt(i)) || exp.charAt(i)==="." || exp.charAt(i)==="-") && i>=0)
        {
            if(exp.charAt(i)==="-" && !isNaN(exp.charAt(i-1)))
            {
                break;
            }
            tempp=exp.charAt(i--)+tempp;
        }

        tempp=exp.charAt(i)+tempp;
        setLastOperation(tempp);
    }

    //if first character is an  number or started with an decimal point last operation sets to false
    if(!isNaN(tempp.charAt(0)) || tempp.charAt(0)===".")
    {
        setLastOperation("");
    }

    //if already operation is performed and presss = need to perform the function of an last operation

    if(isPerformed)
    {
        temp=temp+lastOperation;
    }
    setPerformed(true);

    var op=[];
    var values=[];

    //to check the precedence and perform the operation for an expression
    for (i = 0; i < temp.length; i++) {

        if (temp.charAt(i) === "-" && (i === 0  || isNaN(temp.charAt(i - 1)))) {
          var temp1 = "-";
          i++;
  
          while (i <= temp.length && (!isNaN(temp.charAt(i)) || temp.charAt(i) === "."||temp.charAt(i)==="e")) {
            //to handle e term after pressing the equal operation increment according to our old operation
            if(temp.charAt(i)==="e")
            {
                //console.log("e");
                temp1+="e+";
                i+=2;
            }

            temp1+=temp.charAt(i++);
          }
  
          values.push(temp1);
          i--;
        } 
        else if (!isNaN(temp.charAt(i))) {
          temp1= "";
  
          while (i <= temp.length && (!isNaN(temp.charAt(i)) || temp.charAt(i) === "." ||temp.charAt(i)==="e")) {

            if(temp.charAt(i)==="e")
            {
                //console.log("e1");
                temp1+="e+";
                i+=2;
                continue;
            }
            temp1 += temp.charAt(i++);
          }
  
          values.push(temp1);
          i--;
        } 

        else if (isNaN(temp.charAt(i))) {
          while (op.length !== 0 && Precedence(temp.charAt(i), op[op.length - 1])) {
            values.push(perform(op.pop(), values.pop(), values.pop()));
          }
          op.push(temp.charAt(i));
        }
      }

      var res;
      while(op.length!==0)
      {
        res=perform(op.pop(),values.pop(),values.pop());
        values.push(res);
      }
      setExp(values.pop().toString());
      setPrevExp(res.toString());

};

export default Calc;