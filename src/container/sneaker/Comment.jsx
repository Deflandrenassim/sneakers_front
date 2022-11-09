import axios from 'axios';
import React, { useState, useEffect } from 'react';
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
  useEffect(() => {
    axios.get('http://localhost:8080/sneakers/:id')
      .then((response) => {
        console.log(response);
      });
  });

  return (
    <div className="comment">
      <Textfield onChange={handleComment} placeholder="Ajouter un Commentaire" />
      <Button onClick={postComment}> Envoi </Button>
    </div>
  );
}
