import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='box'>
        <NavLink to ='/*'>
          <div>Home</div>
        </NavLink>
        <NavLink to ='/user'>
          <div>User</div>
        </NavLink>
    </div>
  )
}

export default Navbar