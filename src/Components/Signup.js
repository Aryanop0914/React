import React from 'react'

export default function Signup() {
  return (
    <>
    
<div className="signup">
<form> 
<div className="mb-3">
<h2 >Signup Form</h2>
  </div>
  <div className="mb-3 text-start ">
    <label htmlFor="Inputusername1" className="form-label">Username</label>
    <input type="text" className="form-control" id="Inputusername1" placeholder='Enter Your Username'/>
  </div>
  <div className="mb-3 text-start">
    <label htmlFor="InputEmail2" className="form-label">Email address</label>
    <input type="email" className="form-control" id="InputEmail2" placeholder='Enter Your Email'/>
  </div>
  <div className="mb-3 text-start">
    <label htmlFor="InputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="InputPassword1" placeholder='Enter Your Password'/>
  </div>
  <div className="mb-3 text-start">
    <label htmlFor="InputcPassword1" className="form-label"> Confirm Password</label>
    <input type="cpassword" className="form-control" id="InputcPassword1" placeholder='Enter Your Password'/>
  </div>
  <button type="submit" className="btn btn-primary">Sign Up</button>
</form>
    
    </div>
    </>
  )
}
