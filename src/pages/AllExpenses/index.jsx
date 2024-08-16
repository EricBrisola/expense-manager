import { useContext } from "react";
import { ExpensesContext } from "../../contexts/ExpensesContext";
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import ExpenseCard from "../../components/ExpenseCard";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Modal from "../../components/Modal";

dayjs.extend(dayOfYear);

const AllExpenses = () => {
  const {
    allExpenses,
    allExpensesTotal,
    deleteExpense,
    editExpense,
    categories,
    categoriesImgHashMap,
    isModalOpen,
    openModal,
    closeModal,
  } = useContext(ExpensesContext);

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

  return (
    <main className="flex flex-1 bg-[#E2DEE9] text-white">
      <Sidebar categories={categories}>
        <article className="flex flex-col items-center gap-2">
          <p className="text-xl font-semibold">Meses</p>
          <select className="h-12 w-36 rounded border-[1px] border-[#645cff] bg-transparent p-2 outline-none focus:border-2">
            {months.map((month) => {
              return (
                <option value={month.value} key={month.value}>
                  {month.month}
                </option>
              );
            })}
          </select>
        </article>
      </Sidebar>
      <section className="flex flex-1 flex-col gap-3">
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
        <article className="flex justify-center pb-7">
          <div className="flex w-full flex-wrap gap-6 px-9">
            {allExpenses.length >= 1 ? (
              allExpenses.map((expense) => {
                return (
                  <ExpenseCard
                    key={expense.id}
                    id={expense.id}
                    title={expense.title}
                    value={expense.value}
                    categoryImg={categoriesImgHashMap[expense.category]}
                    deleteExpense={() => deleteExpense(expense.id)}
                    editExpense={() => editExpense(expense.id)}
                  />
                );
              })
            ) : (
              <p className="flex w-full justify-center text-2xl font-normal text-[#102a42]">
                Sem gastos registrados
              </p>
            )}
          </div>
        </article>
      </section>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <div className="flex flex-col rounded bg-[#F7F6FA] p-2">
            <div className="flex w-full justify-end">
              <button
                type="button"
                className="h-8 w-8 cursor-pointer rounded border-none bg-red-600 pb-1 text-lg text-white"
                onClick={closeModal}
              >
                x
              </button>
            </div>
            <form className="flex w-[30rem] flex-col gap-6 py-6 text-black">
              <section className="flex flex-row">
                <article>
                  <label
                    htmlFor="new-expense-title-input"
                    className="flex flex-col gap-4"
                  >
                    <p className="text-lg font-semibold leading-none">Gasto</p>
                    <input
                      type="text"
                      name="title"
                      className="h-12 w-56 rounded-md border-[1px] border-[#645cff] bg-transparent p-3 outline-none focus:border-2"
                      id="new-expense-title-input"
                      // value={expense.title}
                      // onChange={handleExpenseInputs}
                      required
                      placeholder="Mercado"
                    />
                  </label>
                  <label
                    htmlFor="new-expense-value-input"
                    className="flex flex-col gap-4 bg-slate-300"
                  >
                    <p className="text-lg font-semibold leading-none">Valor</p>
                    <input
                      type="text"
                      name="value"
                      className="h-12 w-56 rounded-md border-[1px] border-[#645cff] bg-transparent p-3 outline-none focus:border-2"
                      id="new-expense-value-input"
                      // value={expenseValue}
                      // onChange={handleExpenseValueChange}
                      required
                      min={0}
                      step={0.01}
                    />
                  </label>
                </article>
                <article>
                  <label
                    htmlFor="new-expense-category-input"
                    className="flex flex-col gap-4"
                  >
                    <p className="text-lg font-semibold leading-none">
                      Categoria
                    </p>
                    <select
                      name="category"
                      className="h-12 w-56 rounded-md border-[1px] border-[#645cff] bg-transparent p-3 outline-none focus:border-2"
                      id="new-expense-category-input"
                      // value={expense.category}
                      // onChange={handleExpenseInputs}
                      required
                    >
                      {categories.map((category) => {
                        return (
                          <option value={category.value} key={category.value}>
                            {category.name}
                          </option>
                        );
                      })}
                    </select>
                  </label>
                  <div className="flex flex-col gap-4">
                    <p className="text-lg font-semibold leading-none">Data</p>
                    <input
                      id="new-expense-date-input"
                      type="date"
                      name="date"
                      className="h-12 w-56 rounded border-[1px] border-[#645cff] bg-transparent p-3 outline-none focus:border-2"
                      // onChange={handleExpenseInputs}
                      // value={expense.date}
                      max={dayjs().format("YYYY-MM-DD")}
                    />
                  </div>
                </article>
              </section>
              <button className="rounded-md bg-[#645cff] p-2 text-white shadow-sm shadow-[#645cff]/20 duration-200 hover:shadow-lg hover:shadow-[#645cff]/40">
                Salvar
              </button>
            </form>
          </div>
        </Modal>
      )}
    </main>
  );
};

export default AllExpenses;
