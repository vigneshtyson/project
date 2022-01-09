import { useState } from "react";
import MockData from "../../assets/data/MOCK_DATA.json"
import "./filer.css"
const SearchTable = () =>{
    const [searchTerm, setsearchTerm]=useState("");
    return(
        <div className="search_container">
            <input type="text" placeholder="Search...." className="form-control" style={{marginTop:50, marginBottom:20,width:"40%"}}
            onChange={(e)=> {
                setsearchTerm(e.target.value);
            }}/>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {MockData.filter((val) => {
                        if(searchTerm ===""){
                            return val;
                        }else if (
                            val.first_name.toLowerCase().includes(searchTerm.toLowerCase())||
                            val.last_name.toLowerCase().includes(searchTerm.toLowerCase())||
                            val.email.toLowerCase().includes(searchTerm.toLowerCase())
                        ){
                            return val;
                        }
                    }).map((m)=>(
                        <tr key={m.id}>
                            <td>{m.first_name}</td>
                            <td>{m.last_name}</td>
                            <td>{m.email}</td>
                            <td>{m.gender}</td>
                        </tr>
                        

                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}
export default SearchTable;