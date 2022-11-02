import Header from './components/header';
import { Searchpage } from './components/searchpage.js';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signin } from './components/signin';
import { Login } from './components/login';
import { Booking } from './components/booking';
import { Terms } from './Terms';
import { HomePage } from './components/homepage';
import { ListBookings } from './components/listBookings';
import { SearchpageUs } from './components/searchpageUs';
import { BookingUs } from './components/bookingUs';


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/booking/user" element={<BookingUs/>}/>
        <Route path="/search/user" element={<SearchpageUs/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/search" element={<Searchpage/>}/>
        <Route path="/list/bookings" element={<ListBookings/>}/>
        <Route path="/*" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter> 
  )
}

export default App;
