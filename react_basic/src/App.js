import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Sidebar from './Sidebar'
import MS_Auth from './MS_Auth';

const App=() =>{
  return (
    <>
    <Navbar/>
    <section className='section'>
        <nav className='nav'>
            <Sidebar/>
        </nav>
        <article className='article'>
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/navbar' element={<Navbar/>}/>
            <Route path='/sidebar' element={<Sidebar/>}/>
            <Route path='/MS_Auth' element={<MS_Auth/>}/>
          </Routes>
      </BrowserRouter>
      </article>
    </section>
    <footer className='footer'>
      <p>2024 © Intone Networks Inc.</p>
    </footer>
    </>
  )
}

export default App;
