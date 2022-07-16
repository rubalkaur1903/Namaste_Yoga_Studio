import React from "react";
import { FaInstagramSquare } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

import '../cssFiles/footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-heading">
                <p>Follow us on Instagram and Twitter to know more about our events and workshops!</p>
            </div>
            <div className="socials-container">
                <a className="social-media-instagram"><FaInstagramSquare /></a>
                <a className="social-media-twitter"><BsTwitter /></a>
            </div>
        </div>
    )
}

export default Footer;