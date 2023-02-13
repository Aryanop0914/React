import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Contact() {
  return (
    <div className="Contact">
     <div className="container">
     <div className="row">
        <div className="col">
                            <div className="fir">
                         
                            <NavLink to="/" className="logo">Homestay<span>.</span></NavLink>
                          
                            <p>We inspire and reach millions of travelers<br /> across 90 local websites</p>
                            <div className="fa-social">
                                <i className="fa fa-facebook"></i>
                                <i className="fa fa-twitter"></i>
                                <i className="fa fa-instagram"></i>
                                <i className="fa fa-youtube-play"></i>
                            </div>
                            
                            </div>
        </div>

        <div className="col">
                        <div className="sec">
                            <h3>Contact Us</h3>
                            <ul>
                                <p>(12) 345 67890</p>
                                <p>info.colorlib@gmail.com</p>
                                <p>856 Cordia Extension Apt. 356, Lake, United State</p>
                            </ul>
                        </div>
        </div>

        <div className="col">
                        <div className="third">
                            <h6>New latest</h6>
                            <p>Get the latest updates and offers.</p>
                            <form action="#" className="fn-form">
                                <input type="text" placeholder="Email"/>
                                <button type="submit"><i className="fa fa-send"></i></button>
                            </form>
                        </div>
        </div>

     </div>
      
      </div>
      
    {/* <footer className="footer-section">
        <div className="container">
            <div className="footer-text">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="ft-about">
                            <div className="logo">
                                <a href="#">
                                    <img src="./images/Cont/footer-logo.png" alt=""/>
                                </a>
                            </div>
                            <p>We inspire and reach millions of travelers<br /> across 90 local websites</p>
                            <div className="fa-social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-tripadvisor"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-youtube-play"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 offset-lg-1">
                        <div className="ft-contact">
                            <h3>Contact Us</h3>
                            <ul>
                                <li>(12) 345 67890</li>
                                <li>info.colorlib@gmail.com</li>
                                <li>856 Cordia Extension Apt. 356, Lake, United State</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 offset-lg-1">
                        <div className="ft-newslatter">
                            <h6>New latest</h6>
                            <p>Get the latest updates and offers.</p>
                            <form action="#" className="fn-form">
                                <input type="text" placeholder="Email"/>
                                <button type="submit"><i className="fa fa-send"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-option">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <ul>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Terms of use</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Environmental Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-5">
                        <div className="co-text"><p>
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
  </p></div>
                    </div>
                </div>
            </div>
        </div>
    </footer> */}
    
    </div>
  )
}

