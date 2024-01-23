"use client";
import React, { useState, useEffect } from "react";
import Container from "../../components/general/Container";
import UserList from "../../components/login/UserSelect";
import PasswordField from "../../components/login/PasswordField";

const correct = false;

const defaultValueCredential = {
  id: null,
  password: null,
};

export default function Login() {
  const [userInfo, setUserInfo] = useState(defaultValueCredential);
  const [error, setError] = useState(false);
  const handleUserChange = (userId) => {
    setUserInfo({ ...userInfo, id: userId });
  };

  const handlePin = (pin) => {
    setError(false);
    if (pin.length < 4) {
      setUserInfo({ ...userInfo, password: null });
    } else {
      setUserInfo({ ...userInfo, password: pin });
    }
  };

  useEffect(() => {
    //TODO add logic login user with hook
    if (userInfo.id && userInfo.password) {
      if (correct) {
        console.log("loggeando...");
        //TODO redirigir a ruta
      } else {
        console.log("incorrecto");
        setError(true);
        setUserInfo({ ...userInfo, password: null });
        setTimeout(() => {
          setError(false);
        }, 3000);
      }
    }
  }, [userInfo]);

  return (
    <Container>
      <UserList handleUserChange={handleUserChange} error={error} />
      <PasswordField handlePin={handlePin} error={error} />
    </Container>
  );
}
