import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="h-screen bg-purple-400">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Home;
