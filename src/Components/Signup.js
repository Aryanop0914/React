import React,{ useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {

  // const navigate= useNavigate();
  const[user, setUser]=useState({
    username1:"",email1:"",password1:"",cpassword1:""
  });
   let name,value;

  const handleInputs=(e)=>{
    console.log(e)
    name=e.target.name;
    value=e.target.value;

    setUser({...user,[name]:value});
  }
   const login = async (e)=>{
    e.preventDefault();
    const{username1,email1,password1,cpassword1}=user;
    await fetch("/register",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        username1,email1,password1,cpassword1
      })
    });
    // const data =await res.join();
    // if(data.status === 422 || !data){
    //       window.alert("Invalid Registration");
    //       console.log("Invalid Registration");
    // }else{
    //       window.alert(" Registration Successful");
    //       console.log(" Registration Successful");
    //       navigate.push("/login");
    // }
   }
  

    return (
      <>

        <div className="signup">
          <form method="POST">
            <div className="mb-4">
              <h2>Signup Form📂</h2>
            </div>
            <div className="mb-4 text-start ">
              <label htmlFor="username1" className="form-label">Username</label>
              <input type="text" className="form-control" name="username1" id="username1" value={user.username1} onChange={handleInputs} placeholder='Enter Your Username' />
            </div>
            <div className="mb-4 text-start">
              <label htmlFor="email1" className="form-label">Email address</label>
              <input type="email" className="form-control" name="email1" id="email1" value={user.email1} onChange={handleInputs} placeholder='Enter Your Email' />
            </div>
            <div className="mb-4 text-start">
              <label htmlFor="password1" className="form-label">Password</label>
              <input type="password" className="form-control" name="password1" id="password1" value={user.password1} onChange={handleInputs} placeholder='Enter Your Password' />
            </div>
            <div className="mb-4 text-start">
              <label htmlFor="cpassword1" className="form-label"> Confirm Password</label>
              <input type="password" className="form-control" name="cpassword1" id="cpassword1" value={user.cpassword1} onChange={handleInputs} placeholder='Enter Your Password' />
            </div>
            <p>Already registered... <Link to="/login">Login</Link></p>
            <button type="submit" onClick={login} className="btn btn-primary">Sign Up</button>
          </form>

        </div>
      </>
    );
  }

