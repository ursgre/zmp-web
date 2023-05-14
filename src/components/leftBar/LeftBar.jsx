import "./leftBar.scss";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";


const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
   
  function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
    navigate("/login")
  }

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://whill.inc/pl/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
              alt=""
            />
            <span>
              <Link to={`/profile/${localStorage.getItem('user_id')}`}>Your Profile</Link>
            </span>
          </div>
         
          <div className="item">
          <button onClick={logout}>Log out</button> 
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
