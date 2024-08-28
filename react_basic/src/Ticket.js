import React ,{useState}from "react";
import './Ticket.css';

function Ticket() {
    const[searchbykeyword,setkeyword]=useState('')

    return(<>
    <div className="main-ticket">
        
        <h3>Ticket </h3>
        <div className="mticket">
            <div className="flexdiv">
            <label></label>
            <input className="labels" type="text" placeholder="Search by Keyword" value={setkeyword}
            onChange={(e)=>{setkeyword(e.target.value)}}/>

            <button type="button" className="button">Filter</button>
            <button type="button" className="button1" >+ Raise Ticket</button>
            </div>

    <table className="case-table">
        <thead>
            <tr>
                <th>Case Number</th>
                <th>Case Type</th>
                <th>Case Priority</th>
                <th>Department</th>
                <th>Description</th>
                <th>Status</th>
                <th>Created On</th>
                <th>Modified On</th>
                <th>Request Details</th>
            </tr>
        </thead>
        <tr>
            <td>1</td>
            <td>IT</td>
            <td>Medium</td>
            <td>IT</td>
            <td>Software installation</td>
            <td>Open</td>
            <td>27/08/2024</td>
            <td>27/08/2024</td>
            <td><a href="">Details</a></td>
        </tr>

    </table>
            </div>
            
        </div>
        </>
        )
    }
    
    

export default Ticket