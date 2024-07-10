//import { useEffect, useState } from "react";
import { useContext } from "react";
import { ExpensesContext } from "../../contexts/ExpensesContext";
import dayjs from "dayjs";
import ExpenseCard from "../../components/ExpenseCard";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

function Today() {
  const { dailyTotal, dailyExpenses, deleteExpense } =
    useContext(ExpensesContext);

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
    <main className="flex flex-1 bg-[#E2DEE9] text-white">
      <Sidebar categories={categories} />
      <section className="flex flex-1 flex-col gap-3">
        <Header total={dailyTotal} date={dayjs().format("DD/MM/YYYY")} />
        <article className="flex justify-center pb-7">
          <div className="flex w-2/4 flex-wrap gap-6 pl-[9%]">
            {dailyExpenses.length >= 1 ? (
              dailyExpenses.map((expense) => {
                return (
                  <ExpenseCard
                    key={expense.id}
                    id={expense.id}
                    title={expense.title}
                    value={expense.value}
                    deleteExpense={() => deleteExpense(expense.id)}
                  />
                );
              })
            ) : (
              <p className="flex w-4/5 justify-center pr-3 text-2xl font-normal text-[#102a42]">
                Sem gastos registrados hoje
              </p>
            )}
          </div>
        </article>
      </section>
    </main>
  );
}

export default Today;
