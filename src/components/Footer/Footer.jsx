import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="copyright">
          2022 &copy; Build by <strong>Aril Harlih</strong>
        </div>
        <div className="social-media">
          <a
            href="https://www.instagram.com/arilharlih/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <span>Instagram</span>
          </a>
          <a
            href="https://twitter.com/26Liraa"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <span>Twitter</span>
          </a>
          <a
            href="https://github.com/arilhr"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <span>Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/auriel-harlih/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <span>Linkedin</span>
          </a>
        </div>
      </Container>
    </footer>
  );
};
