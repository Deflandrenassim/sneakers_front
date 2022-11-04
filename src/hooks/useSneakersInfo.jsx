import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useSneakersInfo() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/sneakers/')
      .then((response) => {
        setResponse(response.data);
      });
  }, []);
  return response;
}
