import "./navbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import axios from 'axios';
import {api} from "../../api/index"; 
import { useState } from "react";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  const [search, setSearch] = useState([])
  const [users, setUsers] = useState([])
  
  function handleSubmit(e) {
    e.preventDefault()
    var data = {
      search: search,
     }
 
   axios.get(api + `/api/users/get-users-by-search/?search=${search}`, {
       headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${localStorage.getItem("token")}` 
       }
   }).then(res => {
    setUsers(res.data)
  }).catch(error => {
    console.log(error)
  })
  }


  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>socialmediaapp</span>
        </Link>
      
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
       
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" onChange={e => setSearch(e.target.value)}  placeholder="Search..." />
          <button type="submit" onClick={handleSubmit}>Search</button>
        </div>

        {users.length > 0 && <div className="user">
          {users.map(user=>(
         <div className="container"> 
          <p>{user.username}</p>
         </div>
          ))}
        </div>}

      </div>
      <div className="right">
       
        <div className="user">
          <img
            src="https://whill.inc/pl/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
            alt=""
          />
           <span>
              <Link to={`/profile/${localStorage.getItem('user_id')}`}>Your Profile</Link>
            </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
