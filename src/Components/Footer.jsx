import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import '../css/Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About Website</Link>
          <a href="https://harehn-kaundun.onrender.com/wip">About Me</a>
          <a href="https://harehn-kaundun.onrender.com/Contact">Contact Me</a>
        </div>
        <p>Copyright © 2025 All rights reserved || Designed By: Nitin </p>
      </div>
    </footer>
  );
}

export default Footer;