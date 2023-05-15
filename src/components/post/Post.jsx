import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";
import axios from "axios";
import { api } from "../../api/index";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [likes, setLikes] = useState(post.total_likes);
  const [liked, setLiked] = useState(()=>{
   var a = post.likes.includes(parseInt(localStorage.getItem("user_id")))
  
   return a
  });

  //TEMPORARY
  
  
  function likePost(post_id){
    axios.post(api + `/api/post/like/${post_id}/`,{}, {
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}` 
        }
      }).then(res => {
        if (res.status == 531 ){
          navigate("/login")
        }
     
        if (liked){
      setLikes(likes -1)
    } else {
      setLikes(likes +1)
    }
  setLiked(!liked)
})
  }

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src="https://whill.inc/pl/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"/>
            <div className="details">
              <Link
                to={`/profile/${post.user.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.user.username}</span>
              </Link>
              
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.body}</p>
          <img src={`data:image/jpeg;base64,${post.file}`} alt="" />
        </div>
        <div className="info">
          <div className="item" onClick={() => likePost(post.id)}>
            
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon/>}
            {likes}
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            Comments
          </div>
          
        </div>
        {commentOpen && <Comments post_id={post.id} />}
      </div>
    </div>
  );
};

export default Post;
