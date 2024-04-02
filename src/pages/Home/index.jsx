import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className=" flex h-screen flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Home;
