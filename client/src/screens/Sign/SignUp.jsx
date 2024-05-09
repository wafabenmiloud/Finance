import React, {useState } from "react";
import axios from "axios";
import "./Sign.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SignUp() {

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return re.test(password);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setError("Invalid email address");
      return;
    }

    if (!validatePassword(formData.password)) {
      setError("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character and be at least 6 characters long");
      return;
    }
    try {
      const response = await axios.post("/api/signup", formData);
      if (response.status === 200) {
        navigate("/signin");
      } else {
        console.error("Error:", response.data);
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="form_wrapper">
        <div className="div1"></div>
        <div className="fform">
          <form onSubmit={handleSubmit}>
            <h1>Welcome to Faji</h1>
            <div className="input_field">
              <h6>Full Name</h6>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Enter your Name here"
                required
              />
            </div>
            <div className="input_field">
              <h6>Email</h6>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email here"
                required
              />
            </div>
            <div className="input_field">
              <h6>Password</h6>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </div>
            {error && <div className="error">{error}</div>}
            <button type="submit">Create Account</button>
            <p>
              Already have an account ?{" "}
              <Link to="/signin" className="link">
                Log in ?
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
