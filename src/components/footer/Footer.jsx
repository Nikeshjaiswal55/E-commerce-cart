import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-basic">
        <div>
            <div className="social"><><i className="icon ion-social-instagram"></i></><><i className="icon ion-social-snapchat"></i></>< ><i className="icon ion-social-twitter"></i></>< ><i className="icon ion-social-facebook"></i></></div>
            <ul className="list-inline">
                <li className="list-inline-item"><>Services</></li>
                <li className="list-inline-item"><>About</></li>
                <li className="list-inline-item"><>Terms</></li>
                <li className="list-inline-item"><>Privacy Policy</></li>
            </ul>
            <p className="copyright">nikesh jaiswal © 2023</p>
        </div>
    </div>
    );
};

export default Footer;