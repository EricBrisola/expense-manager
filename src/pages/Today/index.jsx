//import { useEffect, useState } from "react";
import { useContext } from "react";
import { ExpensesContext } from "../../contexts/ExpensesContext";
import dayjs from "dayjs";

function Today() {
  const { allExpenses, dailyTotal } = useContext(ExpensesContext);
  //console.log(allExpenses);

  return (
    <section className=" flex flex-1 flex-col items-center bg-purple-400 text-white">
      <article className="m-2">
        <h1 className="text-3xl">{dayjs().format("DD/MM/YYYY")}</h1>
      </article>
      <article className="flex flex-wrap justify-center gap-4 py-4">
        {allExpenses.length >= 1 ? (
          allExpenses.map((expense) => {
            return (
              <article
                key={expense.id}
                className="flex h-48 w-48 flex-col items-center justify-around  rounded-md bg-purple-300 p-3 shadow-md duration-200 hover:scale-105"
              >
                <p className="text-xl font-bold">{expense.title}</p>
                <p className="text-md font-medium">R${expense.value}</p>
                <div className="flex w-full justify-center gap-5">
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
          <p>Sem nenhum gasto hoje</p>
        )}
      </article>
      <article className="h-25 m-2 flex w-60 flex-col items-center gap-3 rounded-md bg-purple-300 p-2">
        <p className="text-2xl">Gasto diário</p>
        <p className="text-xl">R${dailyTotal}</p>
      </article>
    </section>
  );
}

export default Today;
