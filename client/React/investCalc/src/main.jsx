import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Navbar'
import Footer from './Footer'
import {BrowserRouter, Routes, Route} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar/>

    <Routes>
       <Route path="/*" element={<App/>}/>
       <Route path="/user" element={<h1>User Data</h1>}/>
    </Routes>

    <Footer/>
  </BrowserRouter>,
)
