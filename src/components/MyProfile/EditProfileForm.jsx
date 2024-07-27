import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth-pages/AuthProvider";

import "../auth-pages/auth.css";

const EditProfileForm = ({ setIsEditing }) => {
  const { updateUser } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => email.includes("@");
  const validatePassword = (password) => password.length >= 6;
  const validateConfirmPassword = (password, confirmPassword) =>
    password === confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValid = validateEmail(email);
    const passwordValid = validatePassword(password);
    const confirmPasswordValid = validateConfirmPassword(
      password,
      confirmPassword
    );

    if (!emailValid || !passwordValid || !confirmPasswordValid) {
      setErrors({
        email: !emailValid ? "Invalid email address." : "",
        password: !passwordValid
          ? "Password must be at least 6 characters long."
          : "",
        confirmPassword: !confirmPasswordValid ? "Passwords do not match." : "",
      });
      return;
    }

    if (updateUser) {
      updateUser({ email, password });
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrors({});
      navigate("/");
    } else {
      console.error("updateUser is not defined");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Edit Account</h2>
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
        <label htmlFor="password">New Password:</label>
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
        <label htmlFor="confirmPassword">Confirm New Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
      </div>
      <button type="submit">Update</button>
      <button
        type="button"
        onClick={() => setIsEditing(false)}
        className="cancel-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditProfileForm;
