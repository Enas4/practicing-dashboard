import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/User/UserSlice";
import "./Navbar.scss";

const Navbar = () => {
  const { name } = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.removeItem("user");
    navigate("/");
    dispatch(logout());
  };

  return (
    <div className="navbar">
      <div>
        <p>Username: "{name}"</p>
      </div>
      <div>
        <button onClick={logOut}>LogOut</button>
      </div>
    </div>
  );
};

export default Navbar;
