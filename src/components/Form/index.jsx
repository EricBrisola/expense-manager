import { ExpensesContext } from "../../contexts/ExpensesContext";
import { useContext } from "react";

const Form = () => {
  const { expense, handleSubmit, handleExpenseInputs, allExpenses } =
    useContext(ExpensesContext);

  //console.log(allExpenses);

  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-16 bg-purple-400">
      <p className="text-xl text-white">Save your new expense below!</p>
      <article className="flex h-80 w-80 items-center justify-center rounded-md bg-zinc-300 shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <label
            htmlFor="new-expense-title-input"
            className="flex flex-col gap-3"
          >
            <p className="text-lg font-semibold">Expense</p>
            <input
              type="text"
              name="title"
              className="h-10 w-56 rounded-md border-[1px] border-purple-100 bg-transparent p-3 outline-none focus:border-2 focus:border-purple-300"
              id="new-expense-title-input"
              value={expense.title}
              onChange={handleExpenseInputs}
              required
              placeholder="supermarket"
            />
          </label>
          <label
            htmlFor="new-expense-value-input"
            className="flex flex-col gap-3"
          >
            <p className="text-lg font-semibold">Value</p>
            <input
              type="number"
              name="value"
              className="h-10 w-56 rounded-md border-[1px] border-purple-100 bg-transparent p-3 outline-none focus:border-2 focus:border-purple-300"
              id="new-expense-value-input"
              value={expense.value}
              onChange={handleExpenseInputs}
              required
              placeholder="96,00"
              min={0}
              step={0.01}
            />
          </label>
          <button className="rounded-md bg-purple-200 p-2 text-white shadow-sm shadow-purple-100/20 duration-200 hover:shadow-lg hover:shadow-purple-100/40">
            Add
          </button>
        </form>
      </article>
    </section>
  );
};

export default Form;
