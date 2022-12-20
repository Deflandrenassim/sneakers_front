import axios from 'axios';
import React, { useState } from 'react';
import CommentById from './CommentById';
import './Comment.css';

import { Textfield } from '../../../component/textfield/Textfield';
import Button from '../../../component/button/Button';

export default function Comment() {
  const [comment, setComment] = useState();
  const handleComment = (event) => {
    setComment(event);
    Date();
  };

  const postComment = () => {
    axios.post('http://localhost:8080/comment/:id', {
      comment,
    });
  };

  return (
    <div className="comment_container">
      <div className="comment">
        <Textfield onChange={handleComment} placeholder="Donne ton avis " sendComment="sendComment" />
        <Button onClick={postComment}> Envoi </Button>
      </div>
      <CommentById />
    </div>
  );
}
