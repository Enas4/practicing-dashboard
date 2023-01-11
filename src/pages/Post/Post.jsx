import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPost } from "../../store/Posts/PostsSlice";
import "./Post.scss";

const Post = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { post, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPost(params.id));
  }, []);

  if (status === "pending") return <div>Loading</div>;
  if (status === "rejected") return <div>{error}</div>;
  if (status === "success")
    return (
      <div>
        {post && (
          <div className="post">
            <p>Id: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
          </div>
        )}
      </div>
    );
};

export default Post;
