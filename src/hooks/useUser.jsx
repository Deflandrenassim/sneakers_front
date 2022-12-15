import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useUser() {
  const [user, setUser] = useState();

    useEffect(() => {
        axios.get('http://localhost:8080/login/')
        .then((response ) => {
            console.log(response);
        }
}
