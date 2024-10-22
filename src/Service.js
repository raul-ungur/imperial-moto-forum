import React from "react";
import { useNavigate } from "react-router-dom";

function Service() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="login">
        <h2>Log In</h2>
        <input className="username" placeholder="username" />
        <br />
        <input className="password" placeholder="Password" />
        <br />
        <button onClick={goToHome} className="button">
          login
        </button>
      </div>
    </>
  );
}

export default Service;
