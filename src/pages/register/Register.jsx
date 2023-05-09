import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        
        <div className="middle">
          <h1>Registration</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link to="/login">
          <button>Login</button>
          </Link>
           
            <button>Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
