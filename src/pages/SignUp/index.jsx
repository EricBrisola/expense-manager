import GoogleLoginImage from "../../assets/google-login-image.png";
import useRedirect from "../../hooks/useRedirect";

const SignUp = () => {
  const redirectTo = useRedirect();

  const redirectToLoginPage = () => {
    redirectTo("/login");
  };

  return (
    <main className="flex flex-1 items-center justify-center bg-[#E2DEE9] text-[#102a42]">
      <section className="">
        <article className="flex w-80 flex-col items-center justify-center rounded-md bg-[#F7F6FA] shadow-lg">
          <p className="w-56 pt-6 text-3xl font-semibold leading-none">
            Cadastro
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
            <label htmlFor="password-confirm">
              <input
                type="password"
                name="password-confirm"
                className="h-12 w-56 rounded-md border-[1px] border-[#645cff] bg-transparent p-3 outline-none focus:border-2"
                id="password-confirm"
                placeholder="Confirmar senha"
                required
              />
            </label>
            <button className="rounded-md bg-[#645cff] p-2 text-white shadow-sm shadow-[#645cff]/20 duration-200 hover:shadow-lg hover:shadow-[#645cff]/40">
              Cadastrar
            </button>
            <article className="flex items-center justify-center gap-2">
              <hr className="border-t-1 mt-1 flex-1 border-[#a2a2a3]" />
              <p className="text-center">ou</p>
              <hr className="border-t-1 mt-1 flex-1 border-[#a2a2a3]" />
            </article>
            <article className="flex cursor-pointer items-center justify-center gap-3 rounded-full border-[1px] border-[#645cff] p-3 shadow-md duration-200 hover:shadow-lg hover:shadow-[#645cff]/40">
              <img
                src={GoogleLoginImage}
                alt="google-login-image"
                className="h-5 w-5"
              />
              <p className="leading-none">Entre com Google</p>
            </article>
          </form>
          <article className="flex gap-1 pb-6">
            <p>Já possui uma conta ? </p>
            <button
              className="text-left font-bold text-[#645cff]"
              onClick={redirectToLoginPage}
            >
              Entre aqui
            </button>
          </article>
        </article>
      </section>
    </main>
  );
};

export default SignUp;
