import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Comment.css';
import { CommentContainer } from '../../component/comment/CommentDesign';
import { Textfield } from '../../component/textfield/Textfield';
import Button from '../../component/button/Button';

export default function Comment() {
  const [comment, setComment] = useState();
  const [getCommentById, setGetCommentById] = useState([]);
  const handleComment = (event) => {
    setComment(event);
  };

  const postComment = () => {
    axios.post('http://localhost:8080/comment/:id', {
      comment,
    });
  };
  useEffect(() => {
    axios.get('http://localhost:8080/comment/:id')
      .then((response) => {
        setGetCommentById(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div className="comment_container">
      <div className="comment">
        <Textfield onChange={handleComment} placeholder="Donne ton avis " sendComment="sendComment" />
        <Button onClick={postComment}> Envoi </Button>
      </div>
      {getCommentById.map((comment) => (
        <CommentContainer>
          <div>
            { comment.comment }
          </div>
        </CommentContainer>
      ))}
    </div>
  );
}
