import React from 'react';
import footerLogo from '../images/footer-logo.png'
function Footer() {
    return (
        <div>
            <footer className="footer-main">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="block text-center">
                        <div className="footer-logo">
                        <img src={footerLogo} alt="logo" className="img-fluid" />
                        </div>
                        <ul className="social-links-footer list-inline">
                        <li className="list-inline-item">
                            <a ><i className="fa-brands fa-facebook"></i></a>
                        </li>
                        <li className="list-inline-item">
                            <a ><i className="fa-brands fa-twitter"></i></a>
                        </li>
                        <li className="list-inline-item">
                            <a ><i className="fa-brands fa-instagram"></i></a>
                        </li>
                        <li className="list-inline-item">
                            <a ><i className="fa fa-rss"></i></a>
                        </li>
                        </ul>
                    </div>
                    
                    </div>
                </div>
                </div>
            </footer>
            <footer className="subfooter">
            <div className="container">
                <div className="row">
                <div className="col-md-6 align-self-center">
                    <div className="copyright-text">
                    <p><a href="#">Eventre</a> &#169; 2024 All Right Reserved</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <a href="#" className="to-top"><i className="fa fa-angle-up"></i></a>
                </div>
                </div>
            </div>
            </footer>
        </div>
    );
}

export default Footer;