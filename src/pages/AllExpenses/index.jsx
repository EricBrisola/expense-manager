import { useContext } from "react";
import { ExpensesContext } from "../../contexts/ExpensesContext";
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";

dayjs.extend(dayOfYear);

const AllExpenses = () => {
  const { allExpenses, allExpensesTotal, deleteExpense } =
    useContext(ExpensesContext);

  return (
    <main className="flex flex-1 items-center bg-purple-400 text-white">
      <aside className="flex h-full items-center">
        <article className="flex h-96 w-52 flex-col justify-around rounded-br-md rounded-tr-md bg-zinc-300 text-black">
          <article className="flex flex-col items-center gap-2">
            <p className="text-xl font-semibold">Filter by Months</p>
            <select className="h-12 w-36 rounded border-[1px] border-purple-950 bg-transparent p-3 outline-none focus:border-2">
              <option value="">January</option>
              <option value="">February</option>
              <option value="">March</option>
              <option value="">April</option>
              <option value="">May</option>
              <option value="">June</option>
              <option value="">July</option>
              <option value="">August</option>
              <option value="">September</option>
              <option value="">October</option>
              <option value="">November</option>
              <option value="">December</option>
            </select>
          </article>
          <article className="flex flex-col items-center gap-2">
            <p className="text-xl font-semibold">Filter by category</p>
            <div className="flex flex-col items-start gap-2 ">
              <label htmlFor="food" className="flex flex-row-reverse gap-1">
                Food
                <input type="checkbox" name="" id="food" className="filters" />
              </label>
              <label
                htmlFor="transport"
                className="flex flex-row-reverse gap-1"
              >
                Transport
                <input
                  type="checkbox"
                  name=""
                  id="transport"
                  className="filters"
                />
              </label>
              <label
                htmlFor="entertainment"
                className="flex flex-row-reverse gap-1"
              >
                Enterteinment
                <input
                  type="checkbox"
                  name=""
                  id="entertainment"
                  className="filters"
                />
              </label>
              <label htmlFor="home" className="flex flex-row-reverse gap-1">
                Home
                <input type="checkbox" name="" id="home" className="filters" />
              </label>
              <label htmlFor="health" className="flex flex-row-reverse gap-1">
                Health
                <input
                  type="checkbox"
                  name=""
                  id="health"
                  className="filters"
                />
              </label>
            </div>
          </article>
          <article className=" flex justify-center gap-3">
            <button className="rounded-md bg-red-800 px-3 py-1 text-white duration-200 hover:shadow-lg hover:shadow-red-800/40">
              Clean
            </button>
            <button className="rounded-md bg-green-700 px-3 py-1 text-white  duration-200 hover:shadow-lg hover:shadow-green-800/40">
              Filter
            </button>
          </article>
        </article>
      </aside>
      <section className="ml-6 flex h-full flex-col gap-3 p-4">
        <article className="flex flex-col items-center gap-2">
          <h1 className="text-3xl text-white">
            {dayjs()
              .subtract(dayjs(dayjs()).dayOfYear() - 1, "day")
              .format("DD/MM/YYYY") +
              " - " +
              dayjs().format("DD/MM/YYYY")}
          </h1>
          {allExpenses.length >= 1 && (
            <article className="h-25 flex w-60 flex-col items-center gap-3 rounded-md bg-purple-950 p-2">
              <p className="text-2xl">Total expense:</p>
              <p className="text-xl">R${allExpensesTotal.toFixed(2)}</p>
            </article>
          )}
        </article>
        <article className="grid grid-cols-6 gap-4 bg-slate-500">
          {allExpenses.length >= 1 ? (
            allExpenses.map((expense) => {
              return (
                <article
                  key={expense.id}
                  className="flex h-48 w-48 flex-col items-center justify-between rounded-md bg-[#260D39] shadow-lg duration-200 hover:scale-105"
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
        </article>
      </section>
    </main>
  );
};

export default AllExpenses;
