import React from 'react';
import './loginpage.css'
import Button from '../button/Button';
import InputField from '../inputfield/InputField';

const LoginPage = () => {
    return (
              <div className="login-box">
                <div className="header">
                  <h1>Hello, Welcome!</h1>
                  <p>Login to your account</p>
                </div>
                <form action="#">
                  <InputField
                    label="Username"
                    type="text"
                    id="username"
                    placeholder="Enter username"
                  />
                  <InputField
                    label="Password"
                    type="password"
                    id="password"
                    placeholder="Enter password"
                  />
                  <Button text="Login" />
                  <div className="footer">
                    <a href="#">Forgot Password?</a>
                  </div>
                </form>
              </div>
            );
          };
  
  export default LoginPage;