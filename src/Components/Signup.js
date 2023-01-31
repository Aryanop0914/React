import React,{ Component } from 'react'
import { Link} from 'react-router-dom'

export default class Signup extends Component{
constructor(props){
  super(props);
  this.state={
    username1:"",
    email1:"",
    password1:"",
    cpassword1:"",
  };
  this.handleSubmit = this.handleSubmit.bind(this);
}

  handleSubmit(e){
    e.preventDefault();
    const{username1,email1,password1,cpassword1}= this.state;
    console.log(username1,email1,password1,cpassword1);
    fetch("http://localhost:5000/register",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        username1,
        email1,
        password1,
        cpassword1,
      }),
    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data,"Registration Successful");
    })
  }
  
    // const data =await res.join();
    // if(data.status === 422 || !data){
    //       window.alert("Invalid Registration");
    //       console.log("Invalid Registration");
    // }else{
    //       window.alert(" Registration Successful");
    //       console.log(" Registration Successful");
    //       navigate.push("/login");
    // }
  //  }
  render(){
    return (
      <>

        <div className="signup">
          <form method="POST" onSubmit={this.handleSubmit}>
            <div className="mb-4">
              <h2>Signup Form📂</h2>
            </div>
            <div className="mb-4 text-start ">
              <label htmlFor="username1" className="form-label">Username</label>
              <input type="text" className="form-control" name="username1" id="username1"  onChange={(e)=>this.setState({username1:e.target.value})} placeholder='Enter Your Username' autoComplete=''/>
            </div>
            <div className="mb-4 text-start">
              <label htmlFor="email1" className="form-label">Email address</label>
              <input type="email" className="form-control" name="email1" id="email1" onChange={(e)=>this.setState({email1:e.target.value})} placeholder='Enter Your Email' autoComplete=''/>
            </div>
            <div className="mb-4 text-start">
              <label htmlFor="password1" className="form-label">Password</label>
              <input type="password" className="form-control" name="password1" id="password1"  onChange={(e)=>this.setState({password1:e.target.value})} placeholder='Enter Your Password' autoComplete=''/>
            </div>
            <div className="mb-4 text-start">
              <label htmlFor="cpassword1" className="form-label"> Confirm Password</label>
              <input type="password" className="form-control" name="cpassword1" id="cpassword1"  onChange={(e)=>this.setState({cpassword1:e.target.value})} placeholder='Enter Your Password' autoComplete='' />
            </div>
            <p>Already registered... <Link to="/login">Login</Link></p>
            <button type="submit"  className="btn btn-primary">Sign Up</button>
          </form>

        </div>
      </>
    );
  }
}