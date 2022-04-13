import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Form from "../components/Form";

const Register = ({setUser}) => {
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
      <h1>Register</h1>
      {/* <Form afterSubmit={() => navigate("/dashboard")} /> */}
      <Form afterSubmit={handleSubmit} />
    </>
  );
};

export default Register;
