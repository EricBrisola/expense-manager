import { useContext } from "react";
import { ExpensesContext } from "../../contexts/ExpensesContext";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import ExpenseCard from "../../components/ExpenseCard";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

dayjs.extend(isoWeek);

const LastSevenDays = () => {
  const { lastSevenDaysExpenses, weeklyTotal, deleteExpense } =
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
    <main className="flex flex-1 flex-col gap-3 bg-[#E2DEE9] text-white">
      <Header
        total={weeklyTotal}
        date={
          dayjs().startOf("month").format("DD/MM/YYYY") +
          " - " +
          dayjs().format("DD/MM/YYYY")
        }
      />
      <section className="flex flex-1 gap-3">
        <Sidebar categories={categories} />
        <article className="flex flex-1 justify-center pb-3">
          <div className="flex w-4/5 flex-wrap gap-6">
            {lastSevenDaysExpenses.length >= 1 ? (
              lastSevenDaysExpenses.map((expense) => {
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
              <p className="mr-48 flex w-full items-center justify-center text-2xl font-normal text-[#102a42]">
                Sem gastos nessa semana
              </p>
            )}
          </div>
        </article>
      </section>
    </main>
  );
};

export default LastSevenDays;
