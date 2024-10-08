import NavbarBtn from "../NavbarBtn";

const Navbar = () => {
  //TODO: ver logica de como mudar o botao de logar para deslogar
  const navButtonStyle =
    "text-white text-base flex flex-2 items-center tracking-wide hover:bg-[#cfe8ff] duration-200 p-2 rounded-md hover:text-[#617d98]";
  return (
    <nav className="flex w-full bg-[#645cff] px-6 py-1">
      <NavbarBtn
        textContent={"Expense manager"}
        path={"/"}
        style={"text-white text-2xl flex flex-1 tracking-wide"}
      />
      <article className="flex flex-1 justify-center gap-6">
        <NavbarBtn textContent={"Hoje"} path={"today"} style={navButtonStyle} />
        <NavbarBtn
          textContent={"Semanal"}
          path={"last-seven-days"}
          style={navButtonStyle}
        />
        <NavbarBtn
          textContent={"Mensal"}
          path={"last-thirty-days"}
          style={navButtonStyle}
        />
        <NavbarBtn
          textContent={"Todos gastos"}
          path={"all-expenses"}
          style={navButtonStyle}
        />
      </article>
      <article className="flex flex-1 justify-end">
        <NavbarBtn
          textContent={"Login"}
          path={"login"}
          style={navButtonStyle}
        />
        <NavbarBtn
          textContent={"Cadastrar"}
          path={"sign-up"}
          style={navButtonStyle}
        />
      </article>
    </nav>
  );
};
export default Navbar;
