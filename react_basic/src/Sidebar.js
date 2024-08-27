import React from "react";
import './Sidebar.css';

const Sidebar=()=>{
    return(
    <>
    <div appHover >
        <div className="site-menu">
            <a href="dashboard">Dashboard</a>
        </div>
        <div className="site-menu">
            <a href="holiday">Holiday List</a>
        </div>
        <div className="site-menu">
            <a href="leave">Apply Leave</a>
        </div>
        <div className="site-menu">
            <a href="Ticket">Ticket</a>
        </div>
        {/* <div className="site-menu">
            <a href="#">Notifications</a>
        </div> */}
        {/* <div className="site-menu">
            <a href="MS_Auth">Sign Out</a>
        </div>  */}
        <div className="site-menu">
            <a href="Announcement">Announcements</a>
        </div>
        <div className="site-menu">
            <a href="AttendenceReport">AttendenceReport</a>
        </div><br/><br/><br/><br/>
        <div className="site-menu">
            <a href="MS_Auth">Sign Out</a>
        </div> 
    </div>
    </>
    )
}
export default Sidebar;