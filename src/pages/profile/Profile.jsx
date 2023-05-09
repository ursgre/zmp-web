import "./profile.scss";
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://i.wpimg.pl/1200x/filerepo.grupawp.pl/api/v1/display/embed/a8ccbd79-18ce-458d-9707-936ac5623aa9"
          alt=""
          className="cover"
        />
        <img
          src="https://i.iplsc.com/dlaczego-niektore-kobiety-wybieraja-pantoflarzy/0007T56EFRJGMTAX-C122-F4.jpg"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          
          <div className="center">
          
            <button>follow</button>
          </div>
        
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;
