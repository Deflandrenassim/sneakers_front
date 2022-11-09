import React from 'react';
import './Card.css';

export function Card({ children }) {
  return (
    <div className="card_sneaker">
      {children}
    </div>
  );
}
export function Picture({ src }) {
  return (
    <img className="picture_sneaker" src={src} alt="sneaker" />

  );
}
export function AlignInfo({ children }) {
  return (
    <div className="align_info">
      {children}
    </div>
  );
}

export function Name({ children }) {
  return (
    <span className="name_sneaker">
      {children}
    </span>
  );
}
export function Price({ children }) {
  return (
    <span className="price_sneaker">
      {children}
    </span>
  );
}
