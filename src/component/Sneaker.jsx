import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Textfield } from './textfield/Textfield';
import Button from './button/Button';
import Picture from './picture/Picture';
import Comment from '../container/comment/Comment';

function Sneaker() {
  const { id } = useParams();
  const [newName, setNewName] = useState();
  const [picture, setPicture] = useState();

  useEffect(() => {
    axios.get(`http://localhost:8080/sneakers/${id}`)
      .then((response) => {
        setNewName(response.data.name);
        setPicture(response.data.picture);
      });
  }, []);

  const UpdateSend = (name) => {
    setNewName(name);
  };

  const sendUpdateComment = () => {
    axios.put(`http://localhost:8080/sneakers/${id}`, {
      newName,
    })
      .then((response) => {
        console.log(response);
      });
  };

  const deleteComment = () => {
    axios.delete(`http://localhost:8080/sneakers/${id}`)
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="comment">
      <Picture source={picture} />
      <span> Name : </span>
      <Textfield value={newName} onChange={UpdateSend} />
      <Button onClick={sendUpdateComment}> Envoyer </Button>
      <Button onClick={deleteComment}> Supprimer </Button>
      <Comment />
    </div>
  );
}

export default Sneaker;
