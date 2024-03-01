import { Link } from "react-router-dom";
const Navbar = () => {
  const navButtonStyle =
    "text-white text-base flex flex-2 items-center bg-purple-200 p-2 border-l-2 border-purple-100 tracking-wide";
  return (
    <nav className="w-full flex">
      <Link
        to="/"
        className="text-white text-2xl flex flex-1 tracking-wide bg-purple-200 p-2"
      >
        Expense manager
      </Link>
      <Link to="/today" className={navButtonStyle}>
        Today
      </Link>
      <Link to="/last-seven-days" className={navButtonStyle}>
        Last 7 days
      </Link>
      <Link to="/last-thirty-days" className={navButtonStyle}>
        Last 30 days
      </Link>
    </nav>
  );
};
export default Navbar;
