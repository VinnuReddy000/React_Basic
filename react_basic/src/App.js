import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Sidebar from './Sidebar'
import MS_Auth from './MS_Auth';
import Announcement from './Announcement';
import AttendenceReport from './AttendenceReport';
import Ticket from './Ticket';


const App=() =>{
  return (
    <>
    <Navbar/>
    <section className='section'>
      <div className='content_flex'>
        <div className='nav'>
            <Sidebar/>
        </div>
        <div >
        <article className='article'>
        <BrowserRouter>
          <Routes>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/navbar' element={<Navbar/>}/>
            <Route path='/sidebar' element={<Sidebar/>}/>
            <Route path='/MS_Auth' element={<MS_Auth/>}/>
            <Route path='/Announcement' element={<Announcement/>}/>
            <Route path='/AttendenceReport' element={<AttendenceReport/>}/>
            <Route path='/Ticket' element={<Ticket/>}/>
          </Routes>
      </BrowserRouter>
      </article>
      </div>
      </div>
    </section>
    <footer className='footer'>
      <p>2024 © Intone Networks Inc.</p>
    </footer>
    </>
  )
}

export default App;
