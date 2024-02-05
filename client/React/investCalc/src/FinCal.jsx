import React from 'react'
import Cal from './Cal'
import Nav from "./Nav"

function FinCal(props) {
  return (
    <>
            <Nav/>
            <div className="container text-center mt-md-5 pt-md-5">
            <div className="row">
            <div className="col-12">
                <h1 className="abtheading">Financial Calculators</h1>
            </div>
            </div>
          </div>
          <div className="container-fluid">
        <div className="row calculatormain">
        <Cal/>
       
       
      </div>
    </div>
    </>
  )
}

export default FinCal