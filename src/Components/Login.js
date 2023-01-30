import React from 'react'
import { Link } from 'react-router-dom'

export default function login() {

      return (
    <>
      <div className="login">
        <form> 
          <div className="mb-4">            
             <h2>Login Form📂</h2>
          </div>
          <div className="mb-4 text-start">            
            <label htmlFor="InputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="InputEmail1" placeholder='Enter Your Email'/>
          </div>
          <div className="mb-4 text-start">
            <label htmlFor="InputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="InputPassword1" placeholder='Enter Your Password'/>
          </div>
             <p>Don't have an Account. <Link to="/signup">Signup</Link></p>
             <button className="btn btn-primary">Login</button>
         </form>
         
       </div>
    </>
  )
}
