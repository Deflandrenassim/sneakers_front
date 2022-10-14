import axios from 'axios';
import React, { useState } from 'react';
import { Textfield } from '../../component/textfield/Textfield';
import Button from '../../component/button/Button';

export default function Comment() {
  const [comment, setComment] = useState();

  const handleComment = (event) => {
    setComment(event);
    console.log(event);
  };

  const postComment = () => {
    axios.post('http://localhost:8080/sneakers/:id', {
      comment,
    });
  };

  return (
    <div>
      <span> commentaire : </span>
      <Textfield onChange={handleComment} />
      <Button onClick={postComment}> Envoi </Button>
    </div>
  );
}
