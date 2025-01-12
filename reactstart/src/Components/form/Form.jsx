import React, { useState } from "react";
import "./Form.css";
import { validateForm } from "./Validation";
import { useNavigate } from "react-router-dom";

function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });
 
  const navigate = useNavigate();

  const handleChange = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, newErrors } = validateForm(username, password);
    setErrors(newErrors);
    if (isValid) {
      alert("Form submitted successfully!");
      console.log("Username:", username);
      console.log("Password:", password);
       navigate("/home");
    }
  };

  return (
    <div className="login-box">
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Login</h2>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={handleChange}
            placeholder="Enter your username"
            maxLength="15"
          />
          {errors.username && (
            <p style={{ color: "red", fontSize: "12px" }}>{errors.username}</p>
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePassword}
            placeholder="Enter your password"
            maxLength="20"
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
          )}
        </div>
        <button type="submit">Login</button>
        <div>
          <a href="#">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
}

export default Form;
