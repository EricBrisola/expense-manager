import NavbarBtn from "../NavbarBtn";

const Navbar = () => {
  const navButtonStyle =
    "text-white text-base flex flex-2 items-center bg-purple-200 p-2 border-l-2 border-purple-100 tracking-wide";
  return (
    <nav className="w-full flex">
      <NavbarBtn
        textContent={"Expense manager"}
        path={"/"}
        style={
          "text-white text-2xl flex flex-1 tracking-wide bg-purple-200 p-2"
        }
      />
      <NavbarBtn textContent={"Today"} path={"today"} style={navButtonStyle} />
      <NavbarBtn
        textContent={"Last 7 days"}
        path={"last-seven-days"}
        style={navButtonStyle}
      />
      <NavbarBtn
        textContent={"Last 30 days"}
        path={"last-thirty-days"}
        style={navButtonStyle}
      />
    </nav>
  );
};
export default Navbar;
