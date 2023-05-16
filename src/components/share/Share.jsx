import "./share.scss";
import { useState } from "react";
import { api } from "../../api/index";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import FileBase from "react-file-base64";
import { Link, useNavigate } from "react-router-dom";

const Share = () => {
  const [message, setMessage] = useState('')
  const [image, setImage] = useState('')
  const navigate = useNavigate();

  const {currentUser} = useContext(AuthContext)

  function handleSubmit(e) {
    e.preventDefault()
    let finalImage = image.replace("data:image/png;base64,", '')
        finalImage = finalImage.replace("data:image/jpeg;base64,", '')
   


    var data = {
     body: message,
     file: finalImage
    
    };

    axios.post(api + "/api/posts/create/", data, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}` 
        }
    }).then(res => {
      if (res.status == 531 ){
        navigate("/login")
      }
      if (res.status == 200){
        window.location.reload()
      }
       
    })

    
}

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
           src="https://whill.inc/pl/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
            alt=""
          />
          <input type="text" onChange={e => setMessage(e.target.value)} placeholder="Tell us what you think" />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{display:"none"}} />
            <label htmlFor="file">
              <div className="item">
                {/* <img src={Image} alt="" />
                <span>Add Image</span> */}
                <FileBase type="file" onDone={({base64}) => setImage(base64)} />
              </div>
            </label>
           
          </div>
          <div className="right">
          <button type='submit' onClick={handleSubmit}>Share</button> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
