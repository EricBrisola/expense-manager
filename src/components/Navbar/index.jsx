import NavbarBtn from "../NavbarBtn";

const Navbar = () => {
  const navButtonStyle =
    "text-white text-base flex flex-2 items-center tracking-wide hover:bg-[#cfe8ff] duration-200 p-2 rounded-md hover:text-[#617d98]";
  return (
    <nav className="flex w-full bg-[#645cff] px-6 py-1">
      <NavbarBtn
        textContent={"Expense manager"}
        path={"/"}
        style={"text-white text-2xl flex flex-1 tracking-wide"}
      />
      <article className="flex gap-6">
        <NavbarBtn
          textContent={"Today"}
          path={"today"}
          style={navButtonStyle}
        />
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
        <NavbarBtn
          textContent={"All expenses"}
          path={"all-expenses"}
          style={navButtonStyle}
        />
      </article>
    </nav>
  );
};
export default Navbar;
