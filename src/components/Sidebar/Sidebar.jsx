import { Link } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="list">
        <Link to="/dashboard">Home</Link>
      </div>

      <div className="list">
        <Link to="/dashboard/posts">Posts</Link>
      </div>
      <div className="list">
        <Link to="/dashboard/profile">Profile</Link>
      </div>
    </div>
  );
};

export default Sidebar;
