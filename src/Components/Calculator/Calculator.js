import './calculator.css';
import { useState } from 'react';
import img from "../../assets/img/calculator.png"

function Calculator() {
  const [value,setvalue]=useState("");


  const change=(e)=>{
    
    setvalue(value.concat(e.target.name))
  }
  const clear=()=>{
    setvalue("")
  }
  const del =()=>{
   try{
    setvalue(value.slice(0,-1))
   }
   catch(error){                                     
    setvalue("Error")                            
   }


  }
  const sum=()=>{
    try{
      setvalue(eval(value))     

    }
    catch{
      setvalue("Error")
    }
  }
  return (
            <div className="flex" >
         <div><h1 style={{textTransform:"uppercase",color:"orange",width:"100%",height:"60px",marginBottom:"5px"}}>calculate here <img src={img} className='img' /></h1></div>
           <div className="total">
            <div><input type="text" value={value}/></div>
            <div className="button">
 <span className="key"><button style={{width:"150px",backgroundColor:"rgb(231, 169, 54)"}} onClick={clear} >AC</button></span>
<span className="key"><button style={{width:"200px",backgroundColor:"rgb(231, 169, 54)"}} onClick={del}>Delete</button></span>
<span className="key"><button style={{width:"89px"}}  name="+" onClick={change}>+</button></span>
<span className="key"><button style={{width:"89px"}}  name="/"onClick={change}>/</button></span>
<span className="key"><button style={{width:"89px"}} name="*" onClick={change}>&#215;</button></span>
<span className="key"><button style={{width:"89px"}} name="-" onClick={change}>-</button></span>
<span className="key"><button name="1" onClick={change}>1</button></span>
<span className="key"><button name="2" onClick={change}>2</button></span>
<span className="key"><button name="3" onClick={change}>3</button></span>
<span className="key"><button name="4" onClick={change}>4</button></span>
<span className="key"><button name="5" onClick={change}>5</button></span>
<span className="key"><button name="6" onClick={change}>6</button></span>
<span className="key"><button name="7" onClick={change}>7</button></span>
<span className="key"><button name="8" onClick={change}>8</button></span>
<span className="key"><button name="9" onClick={change}>9</button></span>
<span  className="key"><button name="0" onClick={change}>0</button></span><br/> 

 <span className="key"><button style={{width:"98%"}} onClick={sum}>=</button></span>




</div>
</div>
         </div>
         
  );
}

export default Calculator;
