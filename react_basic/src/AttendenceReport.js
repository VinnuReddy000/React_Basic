import react, { useState } from 'react';       
import './AttendenceReport.css'
function AttendenceReport(){
   const[Empname,setEmpname]=useState('')
   const[location,setlocation]=useState('')
   const[date,setdate]=useState('')
   const[shift,setshift]=useState('')
   const[searchbykeyword,setkeyword]=useState('')

   const handleChange = (e) => { 
     setlocation(e.target.value); 
   }
   const handleChange1=(e)=>{
     setshift(e.target.value);
   }
    return(<>
    <div className='main-AttendenceReport'>
     <h3>Attendence Report</h3>
    <div className='mAttendenceReport'>
       <label></label>
        <input className='labels' style={{width:250,marginLeft:12,backgroundColor:'#1B84FF12'}}type='text 'placeholder='search by keyword' id='search-input'/>
        
        <div className='label1'>
          <label></label>
          <input style={{backgroundColor:'#1B84FF12', width:200, marginLeft:0}}  type='text' placeholder='select Emp Name' value={Empname}
          onChange={(e)=>{setEmpname(e.target.value)}} className='labels'/>

        <label></label>
            <select value={location} onChange={handleChange}  className='labels' style={{backgroundColor:'#1B84FF12', marginLeft:20, height:40, width:200}}>
             <option value='select location'>Select location</option>
             <option value='Platina'>Platina</option>
             <option value='Nightshift'>Nigthshift</option>
            </select>
            
        <label style={{marginRight:10,marginRight:20}}></label>
          <input style={{backgroundColor:'#1B84FF12', width:200}} className='labels' type='date' placeholder='dd-mm-yyyy' 
          value={date}onChange={(e)=>{setdate(e.target.value)}}/>
        <label></label>
          <select value={shift} onChange={handleChange1} className='labels' style={{backgroundColor:'#1B84FF12', marginLeft:20,width:200}} >
           <option value='Dayshift'>Dayshift</option>
           <option value='Nightshift'>Nightshift</option>
          </select>
        </div>
          <hr/>
        <table className='emp-table'>
         <thead>
           <tr>
             <th height='20' width='100'>Emp Id</th>
             <th  width='100'>Fullname</th>
             <th  width='100'>Location</th>
             <th width='100'>Department</th>
             <th width='100'>Shift</th>
             <th width='100'>Time In</th>
             <th width='100'>Time Out</th>
             <th width='100'>No.of Working Days</th>
             <th width='100'>Personal Leave</th>
             <th width='100'>Sick Leave</th>
             <th width='100'>Optinal Leave</th>
             <th width='100' >WFH</th>
             <th width='100'>Productive Hours</th>
             <th width='100'>Avg Per hours</th>
           </tr>
         </thead>
         <tbody>
          <tr>
            <td>IN-IH-0123</td>
            <td>Emp Name</td>
            <td>Development</td>
            <td>Platina</td>
            <td>Day</td>
            <td>9:30</td>
            <td>6:00</td>
            <td>30</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>9.24Mins</td>
            <td>8.26Mins</td>
          </tr>
         </tbody>
       </table>

      </div>
      </div>
     </>
     )
   }
  export default AttendenceReport


