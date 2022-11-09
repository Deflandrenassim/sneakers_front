import React from 'react';
import './Button.css';

function Button({
  children, onClick, appareanceLike, appareanceDisLike,
}) {
  return (
    <button className={`btn ${appareanceLike} ${appareanceDisLike}`} type="button" onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
