import "./profile.scss";
import Posts from "../../components/posts/Posts"
import { useParams } from "react-router-dom";
import { useEffect , useState} from "react";
import axios from "axios";
import {api} from "../../api/index"; 
import { Link, useNavigate } from "react-router-dom";


const Profile = () => {
  const {id} = useParams()
  const [user, setUser] = useState('')
  const [observed, setObserved] = useState([])
  const navigate = useNavigate();


  useEffect(() => {
    axios.get(api + `/api/users/get-user-data/?id=${id}` 
      
    ).then(res => {
      setUser(res.data)
      getObserved()
    })
  }, [id])

  function follow() {
    axios.post(api + `/api/user/observe/`,{id: user.id}, {
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}` 
        }
      }).then(res => {
        if (res.status == 531 ){
          navigate("/login")
        }
   getObserved()
       
})

  }
  function isObserved(){
    observed.forEach((observation)=> {
      console.log(observation.observed.id)
      console.log(parseInt(user.id))
      console.log(observation.observed.id == parseInt(user.id))
       if (observation.observed.id == parseInt(user.id) ) {
         return true
       }
     }) 
     console.log([])
     return false
  }

  function getObserved(){
    axios.get(api + `/api/user/observed/` , {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}` 
      }
    }
      
    ).then(res => {
      setObserved(res.data)
    })
  }
  

  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://cdn.shopify.com/s/files/1/0342/7123/2137/articles/bone_lab_2048x.jpeg?v=1593474237"
          alt=""
          className="cover"
        />
        <img
          src="https://whill.inc/pl/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          
          <div className="center">

            <div>{user.username}</div>
            
            {id == localStorage.getItem("user_id") ?"": <button type='submit' onClick={()=> follow()}>{isObserved() ?"unfollow" : "follow"}</button> }
          </div>
        
         
        </div>
{user.id && <Posts id={user.id}/>}
      </div>
    </div>
  );
};

export default Profile;
