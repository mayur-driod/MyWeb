import React from 'react';
import './Footer.css'; // Ensure to create and link this CSS file
import { FaInstagram, FaLinkedin,FaGithub } from 'react-icons/fa'; // Using react-icons

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Mayur K Setty. All rights reserved.</p>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/mayurksetty.photography"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/mayurksetty"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/mayur-driod"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
