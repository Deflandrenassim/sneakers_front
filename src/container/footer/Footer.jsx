import React from 'react';
import './Footer.css';
import {
  FaTwitter, FaInstagram, FaGithub, FaYoutube,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer">
      <FooterLogo />
      <FooterInformation />
    </div>
  );
}

export function FooterLogo() {
  return (
    <div className="footer_logo">
      <FaTwitter className="logos youtube" />
      <FaGithub className="logos" />
      <FaInstagram className="logos" />
      <FaYoutube className="logos" />
    </div>
  );
}
export function FooterInformation() {
  return (
    <div className="footer_information">
      <span className="info"> Condition dutilisation</span>
      <span className="info"> Mentions  Légales</span>
      <span className="info"> Paramètres des cookies</span>
    </div>
  );
}
