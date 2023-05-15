import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import { useState } from "react";
import { api } from "../../api/index";
import { useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";



const Comments = (post_id) => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault()
    var data = JSON.stringify({
      body: newComment,
     })
 
   axios.post(api + `/api/post/${post_id.post_id}/comment/`, data, {
       headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${localStorage.getItem("token")}` 
       }
   }).then(res => {
    if (res.status == 531 ){
      navigate("/login")
    }
    axios.get(api + '/api/post/' + post_id.post_id + '/comments/', {
      // options here
    }).then((res) => {
      console.log(res.data);
        if(res.status == 200){
        setComments(res.data);
        console.log(comments)
      }
    });
    
  })
  }

   
  
  
  
  
  // Temporary
  // const comments = [
  //   {
  //     id: 1,
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
  //     name: "John Doe",
  //     userId: 1,
  //     profilePicture:
  //       "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 2,
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
  //     name: "Jane Doe",
  //     userId: 2,
  //     profilePicture:
  //       "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   },
  // ];
  return (
    <div className="comments">
      <form>
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
   
          <input type="text" onChange={e => setNewComment(e.target.value)} placeholder="write a comment" />
          <button type='submit' onClick={handleSubmit}>Send</button>
       
      </div>
    </form>
      {comments.map((comment) => (
        <div className="comment">
          {/* <img src={comment.profilePicture} alt="" /> */}
          <div className="info">
            <span>{comment.user.username}</span>
            <p>{comment.body}</p>
          </div>
      
        </div>
      ))}
    </div>
  );
};

export default Comments;
