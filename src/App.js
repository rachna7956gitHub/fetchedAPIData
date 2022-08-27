import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import About from './components/pages/About'
import Navbar from './components/layout/Navbar'
import Contact from './components/pages/Contact';
// import {Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <div className="App">

      <Navbar /> 
      <Home />
      <About />
      <Contact /> 
       {/* <Routes>
       <Route path='/' element={<Home />} />
       <Route path='about' element={<About />} />
       <Route path='contact' element={<Contact />} />
    </Routes> */}
    </div>
    </>
  );
}

export default App;
