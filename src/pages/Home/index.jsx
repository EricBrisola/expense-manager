import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className=" flex  flex-col h-screen">
      <Navbar />
      <section className="flex flex-1 bg-purple-400">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
export default Home;
