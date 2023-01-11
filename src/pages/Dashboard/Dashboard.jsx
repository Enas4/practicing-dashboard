import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard_layout">
        <div>
          <Sidebar />
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
