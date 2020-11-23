import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="center-holder">
                <div className="footer-columns">
                    <div className="column">
                        <h3>Need help?</h3>
                        <ul>
                            <li>
                                <Link to="/faq">
                                    Do you have a question ?
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;