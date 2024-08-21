// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>
                    abcd afjkafkjk akfn kfnalfnla nffla lfnla fnalfnalfnlfl nnlafn lafanfl afnla flafnl af
                </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="facebook icon" />
                    <img src={assets.twitter_icon} alt="twotter icon" />
                    <img src={assets.linkedin_icon} alt="linkedin icon" />
                </div>
            </div>
            <div className="footer-content-right">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div className="footer-content-center">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+94 34 567 323</li>
                <li>contact@tamoto.com</li>
              </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 @ tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
