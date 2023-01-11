import { Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import LoginRedirect from "../LoginRedirected/LoginRedirectd";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Posts from "../../pages/Posts/Posts";
import Post from "../../pages/Post/Post";
import Profile from "../../pages/Profile/Profile";
import NotFound from "../../pages/NotFound/NotFound";

const RoutesFactory = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <LoginRedirect>
              <Login />
            </LoginRedirect>
          }
        />
        <Route
          path="signup"
          element={
            <LoginRedirect>
              <SignUp />
            </LoginRedirect>
          }
        />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<Post />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default RoutesFactory;
