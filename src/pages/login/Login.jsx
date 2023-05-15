import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../api/index";
import axios from "axios";
import "./login.scss";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault()


        var data = JSON.stringify({
         username: username,
         password: password
        
        });

        axios.post(api + "/api/users/sign-in/", data, {
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => {
          console.log(res.status)
          console.log(res.data)
            if (res.status == 200) {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user_id", res.data.id);
                navigate("/")
            }
        })
    }

  return (
    <div className="login">
      <div className="card">
        
        <div className="middle">
          <h1>Login</h1>
          <form>
           <input type="text" onChange={e => setUsername(e.target.value)} placeholder="Username" />
           <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
           <button type='submit' onClick={handleSubmit}>Sign in</button>
            <Link to="/register">
            <button>Sign up</button>
          </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
