import React,{Component} from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component{
  constructor(props){
    super(props);
    this.state={
      userData:"Login",
      loginbtn:"true",
    };
  }

componentDidMount(){
    fetch("http://localhost:5000/userdata",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    }).then((res)=>res.json())
    .then((data)=>{
        console.log(data,"userData");
        this.setState({userData:data.data});
        this.setState({loginbtn:false})
    }); 

  }
    logout=()=>{
    window.localStorage.clear();
    window.location.href="/";
  };

  render(){
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
  <div className="container-fluid">
    <Link to="/" className="logo">Homestay<span>.</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="d-flex">
      <div className="collapse navbar-collapse " id="navbarNavAltMarkup" >
      <div className="navbar-nav">
        <Link to="/" className="nav-link active">Home</Link>
        <Link to="/forowners" className="nav-link mx-3">For Owners</Link>
        <Link to="/about" className="nav-link ">About</Link>
        <Link to="/contact" className="nav-link mx-3">Contact</Link>
        
        <Link to="/login" className=" loginbtn btn nav-link">{this.loginbtn ? <h1>Login</h1> : this.state.userData.username}</Link>
        <button className="btn btn-danger mx-3" onClick={this.logout}>Log Out</button>
      </div>
      </div>
    </div>
  </div>
</nav>
  )
}
}

