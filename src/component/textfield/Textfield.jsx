import React from 'react';
import './Textfield.css';

export function Textfield({
  onChange, placeholder, value, appareanceComment,
}) {
  return (
    <input
      className={`textfield ${appareanceComment}`}
      type="text"
      onChange={(ev) => onChange(ev.currentTarget.value)}
      placeholder={placeholder}
      value={value}
    />

  );
}
export default function CommentField() {
  return (
    <input
      type="text"
    />
  );
}

export function EmailField({
  onChange, value, placeholder,
}) {
  return (
    <input
      type="email"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
}
export function PasswordField({
  onChange, value, placeholder,
}) {
  return (
    <input
      type="password"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
}
export function NumberField({
  onChange, value, placeholder,
}) {
  return (
    <input
      type="number"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
}
