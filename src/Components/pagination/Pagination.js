import React, { useEffect, useState } from 'react'
import "./page.css"

function Pagination() {
   const [data,setdata]=useState([])
   const [row,setrow]=useState(10)
   const [page,setpage]=useState(0)
   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos").then((res)=> res.json()).then((value)=>setdata(value))
   }, [])
   const buttonlist= Math.ceil(data.length/row) 
   const btn=[]
   for(let i=0;i<buttonlist;i++){
       btn.push(i)
   }
   console.log(btn);
 const start=page*row;
 const  end=start+row;
const handlebtn=(page)=>{
   setpage(page);
}
const handlechange=(e)=>{
    const rownum=parseInt(e.target.value)
    setrow(rownum)
}
const handlenext=()=>{
    setpage(page<buttonlist-1?page+1:0)
}
const handleprev=()=>{
    setpage(page===0?buttonlist-1:page-1)
}
    return (
        <div className='container_page'>
            <div><h1>pagination</h1></div>
            
            <div className='table_container'>
                <div className='row'>
                    pick the row
                    <select onChange={handlechange} >
                    <option>10</option>
                    <option>5</option>
                    </select>
                </div>
                <div>
                <table>
                    <thead>
                        <tr>
                            <th>sno</th>
                            <th>userid</th>
                            <th>title</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            data.slice(start,end).map((value,index)=>{return <tr>
                                <td>{value.id}</td>
                                <td>{value.userId}</td>
                                <td>{value.title}</td>
                            </tr>})
                        }
                    </tbody>

                </table>
                </div>
            </div>
            <div className='button_container' >
                {page===0?null:<button onClick={handleprev} className='prev' >prev</button>}
                {
                    btn.map((value,index)=>{return <button onClick={()=>handlebtn(value)} className='btn' >{value+1}</button>})
                }

                {page===buttonlist-1?null:<button onClick={handlenext} className='prev' >next</button>}
            </div>
        </div>
    )
}

export default Pagination
