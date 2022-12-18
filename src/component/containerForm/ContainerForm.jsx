import React from 'react';
import Test from '../../images/Logo.png';
import './ContainerForm.css';
export function ContainerForm({ children }) {
    return (
        <div className="container_form">
            {children}
        </div>
    )
}
export function ContainerRegister({ children }) {
    return (
        <div className="container_register">
            {children}
        </div>
    );
}
export function ContainerPicture({ children }) {
    return (
        <img className="container_picture_form" src={Test} alt="image">
            {children}
        </img>
    )
}