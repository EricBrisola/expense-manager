import { useContext } from "react";
import { ExpensesContext } from "../../contexts/ExpensesContext";
import dayjs from "dayjs";

function LastThirtyDays() {
  const { lastThirtyDaysExpenses, monthlyTotal, deleteExpense } =
    useContext(ExpensesContext);
  return (
    <section className=" flex flex-1 flex-col items-center bg-purple-400 text-white">
      <article className="m-2">
        <h1 className="text-3xl">
          {dayjs().startOf("month").format("DD/MM/YYYY") +
            " - " +
            dayjs().format("DD/MM/YYYY")}
        </h1>
      </article>
      {lastThirtyDaysExpenses.length >= 1 && (
        <article className="h-25 m-2 flex w-60 flex-col items-center gap-3 rounded-md bg-purple-950 p-2">
          <p className="text-2xl">Monthly value</p>
          <p className="text-xl">R${monthlyTotal.toFixed(2)}</p>
        </article>
      )}
      <article className="m-4 grid grid-cols-7 gap-4">
        {lastThirtyDaysExpenses.length >= 1 ? (
          lastThirtyDaysExpenses.map((expense) => {
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
                <div className="flex w-full justify-center  gap-5 rounded-b-md bg-purple-950 py-2">
                  <button className="h-6 w-14 rounded-md bg-green-700 px-1">
                    Edit
                  </button>
                  <button
                    className="h-6 w-14 rounded-md bg-red-800 px-1"
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
            No expenses in this month
          </p>
        )}
      </article>
    </section>
  );
}
export default LastThirtyDays;
