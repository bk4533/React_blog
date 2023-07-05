import React from 'react';
import "./footer.css";
import logo from "../../img/logo.png";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container text-center top">
                    <div className="img flogo">
                        <img src={logo} alt='logo'/>
                    </div>
                    <p>&copy; 2023. All right reserved. design by baeng!</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;