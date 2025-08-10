import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <p>© 2025 Mayur K Setty. All rights reserved.</p>
        <nav className="social-icons" aria-label="Social media links">
          <a
            href="https://www.instagram.com/mayurksetty.photography"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            tabIndex={0}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/mayurksetty"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            tabIndex={0}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/mayur-driod"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            tabIndex={0}
          >
            <FaGithub />
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
