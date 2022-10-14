import React from 'react';
import './CardSneaker.css';

export function CardSneaker({ children, key }) {
  return (
    <div className="card_sneaker" key={key}>
      {children}
    </div>
  );
}
export function PictureSneaker({ src }) {
  return (
    <img className="picture_sneaker" src={src} alt="sneaker" />
  );
}
export function NameSneaker({ children }) {
  return (
    <span className="name_sneaker">
      {children}
    </span>
  );
}
export function PriceSneaker({ children }) {
  return (
    <span>
      {children }
    </span>
  );
}
