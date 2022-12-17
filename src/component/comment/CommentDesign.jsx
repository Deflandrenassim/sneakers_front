import React from 'react';
import './Comment.css';

export function CommentContainer({ children }) {
  return (
    <div className="comment_container">
      {' '}
      {children }
    </div>
  );
}
export function CommentDate({ children }) {
  return (
    <div>
      {children}
    </div>

  );
}
