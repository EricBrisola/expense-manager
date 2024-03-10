//import { useEffect, useState } from "react";
import { useContext } from "react";
import { ExpensesContext } from "../../contexts/ExpensesContext";

function Today() {
  const { allExpenses } = useContext(ExpensesContext);
  console.log(allExpenses);

  return (
    <section className=" flex flex-1 bg-purple-400 text-white">
      <p>Gastos:</p>
      {allExpenses.length >= 1 ? (
        allExpenses.map((expense) => {
          return (
            <article key={expense.id}>
              <p>{expense.title}</p>
              <p>R${expense.value}</p>
            </article>
          );
        })
      ) : (
        <p>Sem nenhum gasto hoje</p>
      )}
    </section>
  );
}

export default Today;
