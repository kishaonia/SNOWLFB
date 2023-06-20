// frontend/src/components/LoginFormModal/index.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res?.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <>
      <h1 className="login-h1">Log In</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}

        <label>
          Username or Email:
          <br></br>
          <input
            type="text-login"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <br></br>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button
            className="button-submit-login"
            type="submit"
            // disabled={credential.length < 4 || password.length < 6}
        >
                Log In
            </button>

      </form>
    </>
  );
}

export default LoginFormModal;
