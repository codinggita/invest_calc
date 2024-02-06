import React from "react";
import "./Signin.css"


function Signin(){

    return(
        <>
           <div className="form-container sign-up-container">
		<div>
			<h1>Create Account</h1>
			<div class="social-container">
				<p className="social"><i className="fab fa-facebook-f"></i></p>
				<p className="social"><i className="fab fa-google-plus-g"></i></p>
				<p className="social"><i className="fab fa-linkedin-in"></i></p>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
			</div>
		</div>
        </>
    );
}

export default Signin;