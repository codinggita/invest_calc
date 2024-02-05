import React from 'react'
import "./App.css";
import pic1 from "./assets/lum-sum-calculator.png";
import pic2 from "./assets/sip.png";
import pic3 from "./assets/goal-planing.png";
import pic4 from "./assets/goal-sip.png";
import pic5 from "./assets/investment.png";
import pic6 from "./assets/retairement.png";
import pic7 from "./assets/ppf.png";
import pic8 from "./assets/emi.png";
import pic9 from "./assets/child-education.png";

function Cal() {
  return (
    <>

  <div class="col-12 col-md-4 mb-5">
               <div className="card border-0 shadow">
                   <img src={pic1} className="card-img-top" />
                   <div className="card-body text-center">
                       <h5 className="card-title">Lumpsum Calculator</h5>
                       <div className="card-text text-black-50">
                           Thinking of making a Lumpsum investment? Calculate the future value of your wealth using our Lumpsum Calculator.
                       </div>
                       <br />
                       <button className="btn btn-primary">Launch Calculator</button>
                       </div>
               </div>
           
       </div>

       <div class="col-12 col-md-4 mb-5">
               <div className="card border-0 shadow">
                   <img src={pic2} className="card-img-top" />
                   <div className="card-body text-center">
                       <h5 className="card-title">SIP Calculator</h5>
                       <div className="card-text text-black-50">
                       Wish to invest periodically? Calculate the amount of wealth that you can generate using our SIP Calculator.
                            </div>
                       <br />
                       <button className="btn btn-primary">Launch Calculator</button>
                       </div>
               </div>
           
       </div>

       <div class="col-12 col-md-4 mb-5">
               <div className="card border-0 shadow">
                   <img src={pic3} className="card-img-top" />
                   <div className="card-body text-center">
                       <h5 className="card-title">Goal Planning - Lumpsum</h5>
                       <div className="card-text text-black-50">
                       Wish to invest once and make wealth? Calculate the Investment Amount for the same using our One-Time Investment Calculator.
                             </div>
                       <br />
                       <button className="btn btn-primary">Launch Calculator</button>
                       </div>
               </div>
           
       </div>
       <div class="col-12 col-md-4 mb-5">
               <div className="card border-0 shadow">
                   <img src={pic4} className="card-img-top" />
                   <div className="card-body text-center">
                       <h5 className="card-title">Goal Planning - SIP</h5>
                       <div className="card-text text-black-50">
                       How much should you invest Annually or Monthly to Make Wealth? Calculate the Investment Amount using our Regular Investment Calculator.
                           </div>
                       <br />
                       <button className="btn btn-primary">Launch Calculator</button>
                       </div>
               </div>
           
       </div>
       <div class="col-12 col-md-4 mb-5">
               <div className="card border-0 shadow">
                   <img src={pic5} className="card-img-top" />
                   <div className="card-body text-center">
                       <h5 className="card-title">Investment Planner</h5>
                       <div className="card-text text-black-50">
                       What % of your salary should you invest in Equity? Calculate the investment amount using our Ideal Investment Calculator.
                            </div>
                       <br />
                       <button className="btn btn-primary">Launch Calculator</button>
                       </div>
               </div>
           
       </div>
       <div class="col-12 col-md-4 mb-5">
               <div className="card border-0 shadow">
                   <img src={pic6} className="card-img-top" />
                   <div className="card-body text-center">
                       <h5 className="card-title">Retirement Planning</h5>
                       <div className="card-text text-black-50">
                       Wish to live happily post retirement? Calculate the investment amount required for the same using our Retirement Planning Assistant.
                           </div>
                       <br />
                       <button className="btn btn-primary">Launch Calculator</button>
                       </div>
               </div>
           
       </div>
       <div class="col-12 col-md-4 mb-5">
               <div className="card border-0 shadow">
                   <img src={pic7} className="card-img-top" />
                   <div className="card-body text-center">
                       <h5 className="card-title">PPF Calculator</h5>
                       <div className="card-text text-black-50">
                       Wish to calculate the maturity amount of your PPF? Calculate the PPF amount that you would receive at the end of lock-in period using our PPF Calculator.
                            </div>
                       <br />
                       <button className="btn btn-primary">Launch Calculator</button>
                       </div>
               </div>
           
       </div>
       <div class="col-12 col-md-4 mb-5">
               <div className="card border-0 shadow">
                   <img src={pic8} className="card-img-top" />
                   <div className="card-body text-center">
                       <h5 className="card-title">EMI Calculator</h5>
                       <div className="card-text text-black-50">
                       Wish to calculate the monthly EMI of your loan? Calculate the EMI that you would pay every month to repay your loan using our EMI Calculator.
                            </div>
                       <br />
                       <button className="btn btn-primary">Launch Calculator</button>
                       </div>
               </div>
           
       </div>
       <div class="col-12 col-md-4 mb-5">
               <div className="card border-0 shadow">
                   <img src={pic9} className="card-img-top" />
                   <div className="card-body text-center">
                       <h5 className="card-title">Children Education Planner</h5>
                       <div className="card-text text-black-50">
                       How much do you need to save Monthly to fund your child’s education? Calculate the amount using our Children Education Planner.
                            </div>
                       <br />
                       <button className="btn btn-primary">Launch Calculator</button>
                       </div>
               </div>
           
       </div>
 
    </>
  )
}

export default Cal;