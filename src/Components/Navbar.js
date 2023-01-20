import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">

     <div className="logo">
         <h3>Homestay<span>.</span></h3>
     </div>
     
        <div className="menu">
          <ul>
            <li className="active"><a href="">Home</a></li>
            <li><a href="">For Owners</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact</a></li>
            <a href="login.php" id="login">hiiheelo</a>
            
          
          </ul>
        </div>
          
     
     </nav>
  )
}
