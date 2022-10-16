import Header from './components/header';
import { Home }  from './components/home';
import { Searchpage } from './components/searchpage.js';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signin } from './components/signin';
import { Login } from './components/login';


function App() {
  return(
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/search" element={<Searchpage/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/*" element={<Home/>}/>
      </Routes>
    </BrowserRouter> 
  )
}

export default App;
