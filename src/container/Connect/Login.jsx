import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../../component/button/Button';
import './Login.css';
import { EmailField, PasswordField } from '../../component/textfield/Textfield';

function Login() {
  const [verificationMail, setVerificationMail] = useState();
  const [verificationPassword, setverificationPassword] = useState();
  const [erreur, setErreur] = useState();
  const navigate = useNavigate();

  const handleVerificationMail = (e) => {
    setVerificationMail(e.target.value);
  };

  const handleVerificationPassword = (e) => {
    setverificationPassword(e.target.value);
  };

  const sendVerification = () => {
    axios.post('http://localhost:8080/login/', {
      verificationMail, verificationPassword,
    })
      .then((response) => {
        console.log(response);
        navigate('/');
      })
      .catch((error) => {
        setErreur(error.response.data.message);
      });
  };

  return (
    <div className="login">
      <EmailField value={verificationMail} onChange={handleVerificationMail} />
      <PasswordField value={verificationPassword} onChange={handleVerificationPassword} />
      <span>{erreur}</span>
      <Button onClick={sendVerification}> Envoyer </Button>
    </div>
  );
}
export default Login;
