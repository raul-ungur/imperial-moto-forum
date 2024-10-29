import React from "react";
import { useNavigate } from "react-router-dom";

function Service() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/service");
  };

  return (
    <>
      <div>
        <div className="Singup">
          <h2>Sign Up</h2>
          <input className="username" placeholder="username" />
          <br />
          <input className="email" placeholder="Email" />
          <br />
          <input className="password" placeholder="Password" />
          <br />
          <button onClick={goToHome} className="button">
            Sign-up
          </button>
        </div>
      </div>
    </>
  );
}

export default Service;
