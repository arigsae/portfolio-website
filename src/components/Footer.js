import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <ul className="social-links">
                    <li><a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;