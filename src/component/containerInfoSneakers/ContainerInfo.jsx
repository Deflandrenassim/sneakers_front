import React from 'react';
import './ContainerInfo.css';

export function ContainerInfo({ children }) {
  return (
    <div className="container-info">
      {children}
    </div>
  );
}
export function ContainerHeaderInfo({ children, info, marque }) {
  return (
    <div className="container_header_info">
      <span className="container_info">
        {info}
      </span>
      <span className="container_marque">
        {marque}
      </span>
      {children}
    </div>
  );
}
export function ContainerFooterInfo({ children }) {
  return (
    <div className="container_footer_info">
      {children}
    </div>
  );
}
export function ContainerPrice({ children, price }) {
  return (
    <div className="container_price">
      <span>
        {price}
        {' '}
        €
      </span>
      {children}
    </div>
  );
}
export function ContainerSize({ children, size }) {
  return (
    <div className="container_size">
      <span>
        Size :
        {' '}
        {size}
      </span>
      {children}
    </div>
  );
}

export function ContainerMatiere({ children }) {
  return (
    <div>
      <span>  Matière : Coton, Polystirène 100% </span>
      {children}
    </div>
  );
}
export function ContainerLinkShop({ children }) {
  return (
    <a href="https://www.jdsports.fr/">
      {children}
    </a>
  );
}
