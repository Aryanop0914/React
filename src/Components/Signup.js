import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {

    return (
      <>

        <div className="signup">
          <form>
            <div className="mb-4">
              <h2>Signup Form📂</h2>
            </div>
            <div className="mb-4 text-start ">
              <label htmlFor="username1" className="form-label">Username</label>
              <input type="text" className="form-control" id="username1" placeholder='Enter Your Username' />
            </div>
            <div className="mb-4 text-start">
              <label htmlFor="email1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email1" placeholder='Enter Your Email' />
            </div>
            <div className="mb-4 text-start">
              <label htmlFor="password1" className="form-label">Password</label>
              <input type="password" className="form-control" id="password1" placeholder='Enter Your Password' />
            </div>
            <div className="mb-4 text-start">
              <label htmlFor="cpassword1" className="form-label"> Confirm Password</label>
              <input type="password" className="form-control" id="cpassword1" placeholder='Enter Your Password' />
            </div>
            <p>Already registered... <Link to="/login">Login</Link></p>
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>

        </div>
      </>
    );
  }

