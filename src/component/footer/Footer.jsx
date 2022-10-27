import React from 'react';
import './Footer.css';
import {
  FaTwitter, FaInstagram, FaGithub, FaYoutube,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer">
      <Logo />
    </div>
  );
}

export function Logo() {
  return (
    <div className="logo">
      <FaTwitter className="img" />
      <FaGithub />
      <FaInstagram />
      <FaYoutube />
    </div>
  );
}
