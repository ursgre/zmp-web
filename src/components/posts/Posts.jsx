import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Anna Janczyk",
      userId: 1,
      profilePic:
        "https://www.fashiondoctors.pl/wp-content/uploads/2022/03/happy-older-woman-standing-in-garden-2021-08-26-23-05-31-utc.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://bi.im-g.pl/im/e3/12/14/z21048035AMP.jpg",
    },
    {
      id: 1,
      name: "Anna Janczyk",
      userId: 1,
      profilePic:
        "https://www.fashiondoctors.pl/wp-content/uploads/2022/03/happy-older-woman-standing-in-garden-2021-08-26-23-05-31-utc.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://kakadu.pl/blog/wp-content/uploads/2022/10/760x535px_2.jpg",
    },
    {
      id: 2,
      name: "Julia Gracz",
      userId: 2,
      profilePic:
        "https://www.kobiety.pl/upload/gallery/2017/02/id_6254_1487337537_1920x1280.jpg",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
