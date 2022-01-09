import { useState } from "react";
import "./Check.css"

function CheckBox() { 
  const [name,setname]=useState([])

  const arr = ["B. R. Ambedkar","A. P. J. Abdul Kalam","Vallabhbhai Patel","Jawaharlal Nehru","Mother Teresa"]

  const handleclick=(e)=>{
    if(e.target.checked){
    setname([...name,e.target.value])
    }
    else{
    const remingval= name.filter((value)=>{
        if(value!==e.target.value){
         return value
        } })
      setname(remingval)
    }
  }
  
  return (
    <div className="check_container">
        <div><h1>Choose your Indian Leaders</h1>
        </div>
        <div className="checkcon" >
         {
           arr.map((value,index)=>{
             return(<div key={index}><input type="checkbox" value={value} onClick={handleclick}  />  {value} </div>)
           })
         }
         </div>
         {
             name[0]?<div>
             {
               name.join("-----")
             }
             </div>
             :<div>no value selected</div>
    
         }
    </div>
  );
}

export default CheckBox;



// const a=10
// const b=20

// a!=b?"ok":"notok"

// if(value!==e.target.value){
//   return value
//  } })
// setname(remingval)
// }