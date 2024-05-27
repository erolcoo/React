import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return email.includes('@');
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValid = validateEmail(email);
    const passwordValid = validatePassword(password);

    if (!emailValid || !passwordValid) {
      setErrors({
        email: !emailValid ? 'Invalid email address.' : '',
        password: !passwordValid ? 'Password must be at least 6 characters long.' : '',
      });
      return;
    }

 
    console.log('Email:', email);
    console.log('Password:', password);
    setErrors({});
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <button type="submit">Submit</button>
      <div className="link-container">
        <Link to="/">Back</Link>
        <Link to="/register">Register</Link>
      </div>
    </form>
  );
};

export default LoginForm;
