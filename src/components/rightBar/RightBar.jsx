import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        
        <div className="item">
          <span>Notifications</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://kobietapo30.pl/wp-content/uploads/2022/06/Depositphotos_21438961_L-670x447.jpg"
                alt=""
              />
              <p>
                <span>Filip Szkielet</span> changed their cover picture
              </p>
            </div>
            
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2019/06/27/13/10/selfie-4302321_960_720.jpg"
                alt=""
              />
              <p>
                <span>Juliusz Kwiatek</span> died 
              </p>
            </div>
          
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://szczerydobolu.pl/wp-content/uploads/2017/11/women_1511101510-1024x682.jpg"
                alt=""
              />
              <p>
                <span>Marcela Mięta</span> has birthday
              </p>
            </div>
           
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.pb.pl/100kobietbiznesu/wp-content/uploads/2022/11/100-kobiet-wszystkie-na-strone-830x830-pawlak-400x400.jpg"
                alt=""
              />
              <p>
                <span>Anna Lilia</span> added new post
              </p>
            </div>
            
          </div>
        </div>
        <div className="item">
          <span>Active Friends</span>
          <div className="user">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
