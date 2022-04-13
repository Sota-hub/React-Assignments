import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Form from "../components/Form";

const Login = ({setUser}) => {  
  const [toDashboard, setToDashboard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser(true);
    setToDashboard(true);
  }

  if(toDashboard) {
    return <Navigate to="/dashboard"/>
  }

  return (
    <>
      <h1>Login</h1>
      <Form afterSubmit={handleSubmit} />
    </>
  );
};

export default Login;
