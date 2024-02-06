import React from 'react'
import pic1 from "./assets/lum-sum-calculator.png";
import logo from "./assets/logo.png"

function LumsumCal() {
  return (

    <div>
            <div class="container-fluid mt-md-5 text-center">
        <div class="row">
            <div class="col-12">
                <h1 class="abtheading">Lumpsum Calculator</h1>
            </div>
        </div>
    </div>

    <div className="container-fluid mt-md-2 calculatorinner">
        <div className="row px-0 px-md-5">
          <div className="col-12 col-md-7 order-1 order-md-0">
            <p>Thinking of making a Lumpsum investment? Calculate the future value of your wealth using our Lumpsum Calculator.</p>
            <hr />
            <div className="form-group row">
              <div className="col-md-6">
                <span className="txtsize">Investment Amount <span className="text-danger font-weight-bold">*</span></span>
                <input name="ctl00$pageContent$txtInvest" type="text" autoComplete="off" id="pageContent_txtInvest" className="form-control CurrencyMax" required placeholder="Ex: 10000" onkeyup="word.innerHTML=convertNumberToWords(this.value)" />
                <div id="word" className="wording" />
              </div>
              <div className="col-md-6">
                <span className="txtsize">Expected rate of return (P.A) <span className="text-danger font-weight-bold">*</span>
                </span>
                <input name="ctl00$pageContent$txtinterest" type="text" autoComplete="off" id="pageContent_txtinterest" className="form-control PerTxt Currencyrate" placeholder="Ex: 12%" required />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <span className="txtsize">Tenure (in years) <span className="text-danger font-weight-bold">*</span><small className="txtsize">(Up to 50 years)</small></span>
                <input name="ctl00$pageContent$txtNoofYear" type="text" autoComplete="off" id="pageContent_txtNoofYear" className="form-control CurrencyYear" required placeholder="Ex: 10" />
                <span id="pageContent_RegularExpressionValidator1" style={{visibility: 'hidden'}}>Only numbers allowed</span>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-12">
                <span id="pageContent_lblError" className="text-danger font-weight-bold" />
              </div>
            </div>
            <input type="submit" name="ctl00$pageContent$btnSubmit" defaultValue="Plan My Future Value" onclick="scrollWin();WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$pageContent$btnSubmit&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, false))" id="pageContent_btnSubmit" className="btn btn-primary btn-lg" />
            &nbsp;&nbsp;
           <hr />
          </div>
          <div className="col-12 col-md-5 order-0 order-md-1">
            <img src={pic1} className="img-fluid imgsize" />
          </div> 
        </div> 
      </div>
    </div>
  );
}

export default LumsumCal