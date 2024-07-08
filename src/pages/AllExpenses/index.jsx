import { useContext } from "react";
import { ExpensesContext } from "../../contexts/ExpensesContext";
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import ExpenseCard from "../../components/ExpenseCard";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

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
    <main className="flex flex-1 flex-col gap-3 bg-[#E2DEE9] text-white">
      <Header
        total={allExpensesTotal}
        date={
          dayjs()
            .subtract(dayjs(dayjs()).dayOfYear() - 1, "day")
            .format("DD/MM/YYYY") +
          " - " +
          dayjs().format("DD/MM/YYYY")
        }
      />
      <section className="flex flex-1 gap-3">
        <Sidebar categories={categories}>
          <article className="flex flex-col items-center gap-2">
            <p className="text-xl font-semibold">Meses</p>
            <select className="h-12 w-36 rounded border-[1px] border-[#645cff] bg-transparent p-2 outline-none focus:border-2">
              {months.map((month) => {
                return <option value={month.value}>{month.month}</option>;
              })}
            </select>
          </article>
        </Sidebar>
        <article className="flex flex-1 justify-center pb-3">
          <div className="flex w-4/5 flex-wrap gap-6">
            {allExpenses.length >= 1 ? (
              allExpenses.map((expense) => {
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
                Sem gastos registrados
              </p>
            )}
          </div>
        </article>
      </section>
    </main>
  );
};

export default AllExpenses;
