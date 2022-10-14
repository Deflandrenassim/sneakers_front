import React from 'react';
import './Picture.css';

export default function Picture({ source }) {
  return (
    <img className="picture" src={source} alt="waaaw" />
  );
}
