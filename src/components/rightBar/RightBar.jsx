import "./rightBar.scss";
import { useEffect , useState} from "react";
import axios from "axios";
import {api} from "../../api/index"; 

const RightBar = () => {

  const [friends, setFriends] = useState([])

  
  return (
    <div className="rightBar">
      
          
          {/* <div className="user">
            <div className="userInfo">
              <img
                src="https://www.pb.pl/100kobietbiznesu/wp-content/uploads/2022/11/100-kobiet-wszystkie-na-strone-mniejsze_0011_Ewa-Wernerowicz_RGB-400x400.jpg"
                alt=""
              />
            
              <span>Lidia Trok</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://img.styl.fm/resize/w1280/newsy/wp-content/uploads/2023/02/wersow-18.jpg"
                alt=""
              />
         
              <span>Michalina Melisa</span>
            </div>
          </div>
          
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.wpimg.pl/1200x/i.wp.pl/a/f/jpeg/26286/kobietapo440.jpeg"
                alt=""
              />
             
              <span>Joanna Kret</span>
            </div>
          </div>
          
          <div className="user">
            <div className="userInfo">
              <img
                src="https://wizerunekkobiety.pl/content/uploads/2016/04/Jak-by%C4%87-atrakcyjn%C4%85-kobiet%C4%85-Atrakcyjny-wygl%C4%85d-i-wizerunek.jpg"
                alt=""
              />
             
              <span>Weronika Kos</span>
            </div>
          </div> */}

        

        
      
     
    </div>
  );
};

export default RightBar;
