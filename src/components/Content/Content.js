import React, { useEffect, useState } from "react";
import { useHttp } from "../../hooks/http.hook";
import WholePost from "../../pages/WholePost";
import Filter from "../Filter/Filter";
import PostSmall from "./PostSmall";

const Content = (props) => {
  const [posts, setPosts] = useState([]);
  const [view, setView] = useState(true);
  const [post, setPost] = useState({});
  const { request } = useHttp();
  const viewPostPage = () => {
    setView(!view);
  };
  const allposts = posts.map((item, index) => (
    <div
      key={index}
      onClick={() => {
        viewPostPage();
        setPost(item);
      }}
    >
      <PostSmall info={item} />
    </div>
  ));
  const category = props.kind;
  useEffect(() => {
    const infPosts = async () => {
      const data = await request(
        "http://localhost:5000/database/viewposts",
        "POST",
        {
          category,
        }
      );
      setPosts(data);
    };
    infPosts();
  }, [request]);

  if (view) {
    return (
      <div className="Content">
        {/* className="TopContent" */}
        <div>
          <Filter />
        </div>
        <div className="ElementContent">{allposts}</div>
      </div>
    );
  } else {
    return (
      <div>
        <WholePost postData={post} viewPage={viewPostPage} />
      </div>
    );
  }
};
export default Content;
