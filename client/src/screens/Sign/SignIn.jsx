import React, { useState , useContext} from "react";
import "./Sign.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

export default function SignIn() {
  const { getLoggedIn } = useContext(AuthContext);
	const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email: email,
      password: password,
    };

    try {
      await axios.post("/api/login", payload);
      await getLoggedIn();
			navigate('/dash');

      console.log("User Logged in successfully");
    } catch (error) {
      if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}    }
  };

  return (
    <>
      <div className="form_wrapper">
        <div className="div1"></div>
        <div className="fform">
          <form onSubmit={handleSubmit}>
            <h1>Welcome to Faji</h1>
            <div className="input_field">
              <h6>Email</h6>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email here"
                required
              />
            </div>
            <div className="input_field">
              <h6>Password</h6>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
            {error && <div className="error">{error}</div>}

            <button type="submit">Login</button>
            <p>
              Don't have an account ?{" "}
              <Link to="/signup" className="link">
                Sign Up ?
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
