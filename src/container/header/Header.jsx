import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.png';
import useToken from '../../authContext/useToken';
import Button from '../../component/button/Button';

export function Header() {
  return (
    <div className="header">
      <div className="contain_lign">
        <HeaderLogo />
        <div className="link_position">
          <HeaderLink />
        </div>
        <div className="connect_position">
          <HeaderConnect />
        </div>
      </div>

    </div>
  );
}
export function HeaderLogo({ children }) {
  return (
    <div>
      <img src={Logo} className="logo" alt="logo sneakers" />
      {children}
    </div>
  );
}

export function HeaderLink({ children }) {
  return (
    <div className="header_link">
      <Link className="link" to="/"> Home</Link>
      <Link className="link" to="/sneakers"> Sneakers</Link>
      <Link className="link" to="/sneakers"> About </Link>
      {children}
    </div>
  );
}

export function HeaderConnect({ children }) {
  const { authUser } = useToken();

  return (
    <div>
      {authUser ? (
        <div className="header_connect">
          <div className="name_user"> Welcome Mr Test </div>
          <Button> Logout </Button>
          {children}
        </div>

      )
        : (
          <div className="header_connect">
            <Link className="link" to="/inscription"> Inscription </Link>
            <Link className="link" to="/login"> Connexion </Link>
            {children}
          </div>
        )}
    </div>
  );
}
