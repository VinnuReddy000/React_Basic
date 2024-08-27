import React from "react";
import './Sidebar.css';

const Sidebar=()=>{
    return(
    <>
    <div appHover>
        <div className="site-menu">
            <a href="Home">Home</a>
        </div>
        <div className="site-menu">
            <a href="holiday">Holiday List</a>
        </div>
        <div className="site-menu">
            <a href="leave">Apply Leave</a>
        </div>
        <div className="site-menu">
            <a href="ticket">Ticket</a>
        </div>
        <div className="site-menu">
            <a href="Notifications">Notifications</a>
        </div>
        <div className="site-menu">
            <a href="MS_Auth">Sign Out</a>
        </div>
    </div>
    </>
    )
}
export default Sidebar;