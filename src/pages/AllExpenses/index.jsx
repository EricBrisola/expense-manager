import { useContext } from "react";
import { ExpensesContext } from "../../contexts/ExpensesContext";
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";

dayjs.extend(dayOfYear);

const AllExpenses = () => {
  const { allExpenses, allExpensesTotal, deleteExpense } =
    useContext(ExpensesContext);

  const months = [
    { month: "Janeiro", value: "01" },
    { month: "Fevereiro", value: "02" },
    { month: "Março", value: "03" },
    { month: "Abril", value: "04" },
    { month: "Maio", value: "05" },
    { month: "Junho", value: "06" },
    { month: "Julho", value: "07" },
    { month: "Agosto", value: "08" },
    { month: "Setembro", value: "09" },
    { month: "Outubro", value: "10" },
    { month: "Novembro", value: "11" },
    { month: "Dezembro", value: "12" },
  ];

  const categories = [
    {
      name: "Comida",
      value: "food",
    },
    {
      name: "Transporte",
      value: "transport",
    },
    {
      name: "Entretenimento",
      value: "enterteinment",
    },
    {
      name: "Moradia",
      value: "home",
    },
    {
      name: "Saúde",
      value: "health",
    },
  ];

  return (
    <main className="flex flex-1 flex-col gap-3 bg-purple-400 text-white">
      <header className="flex justify-center py-3">
        <article className="flex flex-col items-center gap-3">
          <h1 className="text-3xl leading-none text-white">
            {dayjs()
              .subtract(dayjs(dayjs()).dayOfYear() - 1, "day")
              .format("DD/MM/YYYY") +
              " - " +
              dayjs().format("DD/MM/YYYY")}
          </h1>
          {allExpenses.length >= 1 && (
            <article className="flex w-60 flex-col items-center gap-3 rounded-md bg-purple-950 p-3">
              <p className="text-2xl leading-none">Total expense:</p>
              <p className="text-xl leading-none">
                R${allExpensesTotal.toFixed(2)}
              </p>
            </article>
          )}
        </article>
      </header>
      <section className="flex flex-1 gap-3">
        <aside className="flex w-[12%] items-center">
          <article className="flex h-[26rem] w-full flex-col justify-around rounded-br-md rounded-tr-md bg-zinc-300 text-black">
            <article className="flex flex-col items-center gap-2">
              <p className="text-xl font-semibold">Meses</p>
              <select className="h-12 w-36 rounded border-[1px] border-purple-950 bg-transparent p-3 outline-none focus:border-2">
                {months.map((month) => {
                  return <option value={month.value}>{month.month}</option>;
                })}
              </select>
            </article>
            <article className="flex flex-col items-center gap-2">
              <p className="text-xl font-semibold">Categorias</p>
              <div className="flex flex-col items-start gap-2 ">
                {categories.map((category) => {
                  return (
                    <label
                      htmlFor={category.value}
                      className="flex flex-row-reverse gap-1"
                    >
                      {category.name}
                      <input
                        type="checkbox"
                        id={category.value}
                        className="filters"
                      />
                    </label>
                  );
                })}
              </div>
            </article>
            <article className=" flex justify-center gap-3">
              <button className="rounded-md bg-red-800 px-3 py-1 text-white duration-200 hover:shadow-lg hover:shadow-red-800/40">
                Limpar
              </button>
              <button className="rounded-md bg-green-700 px-3 py-1 text-white  duration-200 hover:shadow-lg hover:shadow-green-800/40">
                Filtrar
              </button>
            </article>
          </article>
        </aside>
        <article className="flex flex-1 justify-center pb-3">
          <div className="flex w-4/5 flex-wrap gap-6">
            {allExpenses.length >= 1 ? (
              allExpenses.map((expense) => {
                return (
                  <article
                    key={expense.id}
                    className="flex max-h-52 min-h-48 w-48 flex-col items-center justify-between rounded-md bg-[#260D39] shadow-lg duration-200 hover:scale-105"
                  >
                    <p className="w-full rounded-t-md bg-purple-950 p-1 text-center text-xl font-bold">
                      {expense.title[0].toUpperCase() +
                        expense.title.slice(1, expense.title.length)}
                    </p>
                    <p className="text-md text-2xl font-medium">
                      R${expense.value}
                    </p>
                    <div className="flex w-full justify-center gap-5 rounded-b-md bg-purple-950 py-2">
                      <button className="h-6 w-14 rounded-md bg-green-700 px-1">
                        Edit
                      </button>
                      <button
                        className="h-6 w-14 rounded-md bg-red-800 px-1 text-white"
                        onClick={() => deleteExpense(expense.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </article>
                );
              })
            ) : (
              <p className="col-span-7 text-2xl font-normal">
                No expenses made at all
              </p>
            )}
          </div>
        </article>
      </section>
    </main>
  );
};

export default AllExpenses;
