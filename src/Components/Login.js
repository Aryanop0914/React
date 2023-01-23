import React from 'react'


export default function login() {
    
  return (
    <>
    
<div className="login">
<form> 
<div className="mb-3">
<h2 >Login Form</h2>
  </div>
  <div className="mb-3">
    <label for="InputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="InputEmail1" placeholder='Enter Your Email'/>
    {/*    */}
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="InputPassword1" placeholder='Enter Your Password'/>
  </div>
  <p>Don't have an Account.  <a href="">Sign Up</a></p>
  <button type="submit" className="btn btn-primary">Login</button>
</form>
    
    </div>
    </>
  )
}
