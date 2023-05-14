import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./register.scss";
import { api } from "../../api/index";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()

    var data = JSON.stringify({
            username: username,
      email: email,
            password: password,
      password_confirm: confirmPassword
        });

    axios.post(api + "/api/users/sign-up/", data, {
      headers: {
        "Content-Type": "application/json",
      }
    }).then(res => {
      if (res.data.success === true) {
        navigate("/login")
      }
    })
  }

  return (
    <div className="register">
      <div className="card">
        <div className="middle">
          <h1>Registration</h1>
          <form>
            <input type="text" onChange={e => setUsername(e.target.value)} placeholder="Username" />
            <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <input type="password" onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm password" />
            
            <button type='submit' onClick={handleSubmit}>Sign up</button>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;