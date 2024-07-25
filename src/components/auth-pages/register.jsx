import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './AuthProvider';

import './auth.css';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const { register } = useAuth();
  const navigate = useNavigate();

  const validateEmail = (email) => email.includes('@');
  const validatePassword = (password) => password.length >= 6;
  const validateConfirmPassword = (password, confirmPassword) => password === confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValid = validateEmail(email);
    const passwordValid = validatePassword(password);
    const confirmPasswordValid = validateConfirmPassword(password, confirmPassword);

    if (!emailValid || !passwordValid || !confirmPasswordValid) {
      setErrors({
        email: !emailValid ? 'Invalid email address.' : '',
        password: !passwordValid ? 'Password must be at least 6 characters long.' : '',
        confirmPassword: !confirmPasswordValid ? 'Passwords do not match.' : '',
      });
      return;
    }

    register({ email, password });
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors({});

    navigate('/');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Register</h2>
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
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
      </div>
      <button type="submit">Submit</button>
      <div className="link-container">
        <Link to="/">Back</Link>
        <Link to="/login">Login</Link>
      </div>
    </form>
  );
};

export default RegisterForm;
