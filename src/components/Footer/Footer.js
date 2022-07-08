import React from "react";
import "./Footer.css";
import GitHubIcon from "../../images/github-icon.png"

export default function Footer(props) {
  return (
    <footer className="footer-container">
      <div className="footer-item" id="footer-title">
        <p>Find us on GitHub:</p>
      </div>
      <div className="footer-item">
      <a href="https://github.com/catherine-butler" target="_blank" rel="noreferrer"><img src={GitHubIcon}></img></a>
        <a href="https://github.com/catherine-butler" target="_blank" rel="noreferrer">Catherine Butler</a>
      </div>
      <div className="footer-item">
      <a href="https://github.com/JHannah30" target="_blank" rel="noreferrer"><img src={GitHubIcon}></img></a>
        <a href="https://github.com/JHannah30" target="_blank" rel="noreferrer">Jamie Hannah</a>
      </div>
      <div className="footer-item">
        <a href="https://github.com/natpinnock" target="_blank" rel="noreferrer"><img src={GitHubIcon}></img></a>
        <a href="https://github.com/natpinnock" target="_blank" rel="noreferrer">Natalie Pinnock</a>
      </div>
    </footer> 
  );
}
