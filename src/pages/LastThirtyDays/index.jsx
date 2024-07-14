import { useContext } from "react";
import { ExpensesContext } from "../../contexts/ExpensesContext";
import dayjs from "dayjs";
import ExpenseCard from "../../components/ExpenseCard";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

function LastThirtyDays() {
  const {
    lastThirtyDaysExpenses,
    monthlyTotal,
    deleteExpense,
    categories,
    categoriesImgHashMap,
  } = useContext(ExpensesContext);

  const months = {
    1: "janeiro",
    2: "fevereiro",
    3: "março",
    4: "abril",
    5: "maio",
    6: "junho",
    7: "julho",
    8: "agosto",
    9: "setembro",
    10: "outubro",
    11: "novembro",
    12: "dezembro",
  };

  return (
    <main className="flex flex-1 bg-[#E2DEE9] text-white">
      <Sidebar categories={categories} />
      <section className="flex flex-1 flex-col gap-3">
        <Header
          total={monthlyTotal}
          date={
            dayjs().startOf("month").format("DD/MM/YYYY") +
            " - " +
            dayjs().format("DD/MM/YYYY")
          }
        />
        <article className="flex justify-center pb-7">
          <div className="flex w-full flex-wrap gap-6 px-9">
            {lastThirtyDaysExpenses.length >= 1 ? (
              lastThirtyDaysExpenses.map((expense) => {
                return (
                  <ExpenseCard
                    key={expense.id}
                    id={expense.id}
                    title={expense.title}
                    value={expense.value}
                    categoryImg={categoriesImgHashMap[expense.category]}
                    deleteExpense={() => deleteExpense(expense.id)}
                  />
                );
              })
            ) : (
              <p className="flex w-full justify-center text-2xl font-normal text-[#102a42]">
                Sem gastos registrados no mês de
                {" " + months[dayjs().month() + 1]}
              </p>
            )}
          </div>
        </article>
      </section>
    </main>
  );
}
export default LastThirtyDays;
