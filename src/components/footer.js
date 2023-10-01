import React from 'react'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-container">
        <div className="footer-container1">
          <span className="footer-text">Galaxy Ventures</span>
          <span>Copyright © 2023 <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
            <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
          </svg> by <a href="https://lindseyk.dev">Lindsey</a>.</span>
        </div>
        <div className="footer-container2">
          <div className="footer-container3">
            <span className="footer-text02 Large">Company</span>
            <span className="footer-text03 Large"><a href="#">About Us</a></span>
            <span className="footer-text04 Large"><a href="#">Careers</a></span>
            <span className="footer-text05 Large"><a href="#">Press</a></span>
          </div>
          <div className="footer-container4">
            <span className="footer-text06 Large">Pages</span>
            <span className="footer-text07 Large"><a href="#">Login</a></span>
            <span className="footer-text08 Large"><a href="#">Register</a></span>
            <span className="footer-text09 Large"><a href="#">About</a></span>
          </div>
        </div>
      </div>
      <img alt="image" src="/waves-white.svg" className="footer-image" />
    </footer>
  )
}

export default Footer
