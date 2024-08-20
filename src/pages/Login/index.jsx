const Login = () => {
  return (
    <main className="flex flex-1 items-center justify-center bg-[#E2DEE9] text-white">
      <section className="">
        <article></article>
        <article className="flex w-80 flex-col items-center justify-center rounded-md bg-[#F7F6FA] shadow-lg">
          <p className="w-56 pt-6 text-3xl font-semibold leading-none text-[#102a42]">
            Conecte-se
          </p>
          <form className="flex flex-col gap-4 py-6">
            <label htmlFor="login-input">
              <input
                type="email"
                name="email"
                className="h-12 w-56 rounded-md border-[1px] border-[#645cff] bg-transparent p-3 outline-none focus:border-2"
                id="login-input"
                placeholder="Email"
                required
              />
            </label>
            <label htmlFor="password-input">
              <input
                type="password"
                name="password"
                className="h-12 w-56 rounded-md border-[1px] border-[#645cff] bg-transparent p-3 outline-none focus:border-2"
                id="password-input"
                placeholder="Senha"
                required
              />
            </label>
            <button className="text-left text-sm font-bold text-[#645cff]">
              Esqueceu a senha ?
            </button>
            <button className="rounded-md bg-[#645cff] p-2 text-white shadow-sm shadow-[#645cff]/20 duration-200 hover:shadow-lg hover:shadow-[#645cff]/40">
              Conectar
            </button>
          </form>
        </article>
      </section>
    </main>
  );
};

export default Login;
