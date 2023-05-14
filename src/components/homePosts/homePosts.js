import Post from "../post/Post";
import "./homePosts.scss";
import { useEffect , useState} from "react";
import axios from "axios";
import {api} from "../../api/index"; 


const HomePosts = ({...props}) => {
  
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get(api + `/api/posts/get-feed/` , {
    headers: {
      
      "Authorization": `Bearer ${localStorage.getItem("token")}` 
  }}
      
    ).then(res => {
      setPosts(res.data)
    }).catch(error => {
      console.log(error)
    })
  }, []) 

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};


export default HomePosts;