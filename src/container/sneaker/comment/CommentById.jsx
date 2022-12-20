import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CommentContainer } from '../../../component/comment/CommentDesign';

function CommentById() {
  const [getCommentById, setGetCommentById] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/comment/:id')
      .then((response) => {
        setGetCommentById(response.data);
        console.log(response.data);
      });
  }, []);
  return (
    <div>
      {getCommentById.map((comment) => (
        <CommentContainer>
          <span>
            { comment.comment }
          </span>
        </CommentContainer>
      ))}
    </div>
  );
}

export default CommentById;
