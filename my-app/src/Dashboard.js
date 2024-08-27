import React from 'react';
import './Dashboard.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import HolidayList from './Services/Holidaylist';


const Dashboard=() =>{
    return (
      <>
      <Navbar/>
      <section className='section'>
        <div className='content_flex'>
          <div className='nav'>
              <Sidebar/>
          </div>
          <div><HolidayList></HolidayList></div>
          <article className='article'>
          <BrowserRouter>
            <Routes>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/navbar' element={<Navbar/>}/>
            </Routes>
        </BrowserRouter>
        </article>
        </div>
      </section>
      <footer className='footer'>
        <p>2024 © Intone Networks Inc.</p>
      </footer>
      </>
    )
  }
  
export default Dashboard;
  