
import Posts from "../../components/posts/Posts"

import Share from "../../components/share/Share"
import HomePosts from "../../components/homePosts/homePosts"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
  
      <Share/>
      <HomePosts/>
     
    </div>
  )
}

export default Home