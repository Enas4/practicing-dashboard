import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../../lib/http-client";
import { loadProfile } from "../../store/Profile/ProfileSlice";
import "./Profile.scss";

const Profile = () => {
  const { data } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserById = async (id) => {
      try {
        const response = await get(`/users/${id}`);
        console.log(response.data);
        dispatch(loadProfile(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    getUserById(4);
  }, []);

  return (
    <div className="profile">
      <p>Name: {data?.name}</p>
      <p>Phone: {data?.phone}</p>
      <p>Email: {data?.email}</p>
      <p>Website: {data?.website}</p>
    </div>
  );
};

export default Profile;
