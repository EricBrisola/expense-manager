import { useContext } from "react";
import { ExpensesContext } from "../../contexts/ExpensesContext";
import dayjs from "dayjs";

const LastSevenDays = () => {
  const { lastSevenDaysExpenses, weeklyTotal } = useContext(ExpensesContext);
  return (
    <section className=" flex flex-1 flex-col items-center bg-purple-400 text-white">
      <article className="m-2">
        <h1 className="text-3xl">
          {dayjs().subtract(7, "day").format("DD/MM/YYYY") +
            " - " +
            dayjs().format("DD/MM/YYYY")}
        </h1>
      </article>
      {lastSevenDaysExpenses.length >= 1 && (
        <article className="h-25 m-2 flex w-60 flex-col items-center gap-3 rounded-md bg-purple-300 p-2">
          <p className="text-2xl">Gasto semanal</p>
          <p className="text-xl">R${weeklyTotal}</p>
        </article>
      )}
      <article className="flex flex-wrap justify-center gap-4 py-4">
        {lastSevenDaysExpenses.length >= 1 ? (
          lastSevenDaysExpenses.map((expense) => {
            return (
              <article
                key={expense.id}
                className="flex h-48 w-48 flex-col items-center justify-between  rounded-md bg-purple-300 shadow-md duration-200 hover:scale-105"
              >
                <p className="w-full rounded-t-md bg-purple-200 p-1 text-center text-xl font-bold">
                  {expense.title[0].toUpperCase() +
                    expense.title.slice(1, expense.title.length)}
                </p>
                <p className="text-md text-2xl font-medium">
                  R${expense.value}
                </p>
                <div className="flex w-full justify-center  gap-5 rounded-b-md bg-purple-200 py-2">
                  <button className="h-6 w-14 rounded-md bg-green-700 px-1">
                    Edit
                  </button>
                  <button className="h-6 w-14 rounded-md bg-red-800 px-1">
                    Delete
                  </button>
                </div>
              </article>
            );
          })
        ) : (
          <p>Nenhum gasto nos últimos 7 dias</p>
        )}
      </article>
    </section>
  );
};

export default LastSevenDays;
