import React from 'react'
import logo from "./assets/logo.png"

function Nav() {
  return (
    <>
    <div className="navbar navbar-expand-sm bsnav">
            <div className="container-fluid">
                    <img src={logo} className="img-fluid" />
                
                <button type="button" className="navbar-toggler toggler-spring"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse justify-content-sm-end">
                    <ul className="navbar-nav navbar-mobile mr-0 mt-5 mt-md-0">
                        <li className="nav-item">
                            <span className="nav-link">Home</span>
                        </li>
                        <li className="nav-item">
                        <span className="nav-link">Market</span>
                        </li>
                        <li className="nav-item">
                        <span className="nav-link">Calculator</span>
                        </li>
                        <li className="nav-item">
                        <span className="nav-link">Login</span>
                        </li>
                        <li className="nav-item">
                        <span className="nav-link">Sign up</span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Nav