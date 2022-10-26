import React from 'react';
import './CardSneaker.css';

export function CardSneaker({ children, key }) {
  return (
    <div className="card_sneaker" key={key}>
      {children}
    </div>
  );
}
export function PictureSneaker({children ,  src }) {
  return (
    <img className="picture_sneaker" src={src} alt="sneaker">
      {children}
    </img> 

  );
}
export function AlignInfoSneaker({ children }) {
  return (
    <div className="align_info"> {children} </div> 
  )
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
    <span className="price_sneaker">
      {children }
    </span>
  );
}
