import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div className=" flex h-screen flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Home;
