import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Posts.scss";

import { getPosts } from "../../store/Posts/PostsSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const { status, posts, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (status === "pending") return <div>Loading...</div>;
  if (status === "rejected") return <div>{error}</div>;
  if (status === "success")
    return (
      <div className="posts">
        <ul>
          {posts.length > 0 &&
            posts.map((post) => {
              return (
                <li key={post.id}>
                  <Link to={`${post.id}`}>{post.id}</Link>
                  <br />
                  <p>{post.title}</p>
                </li>
              );
            })}
        </ul>
      </div>
    );
};

export default Posts;
