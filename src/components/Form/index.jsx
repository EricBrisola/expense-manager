import { ExpensesContext } from "../../contexts/ExpensesContext";
import { useContext } from "react";

const Form = () => {
  const { expense, handleSubmit, handleExpenseInputs, allExpenses } =
    useContext(ExpensesContext);

  //console.log(allExpenses);

  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6 bg-purple-400">
      <p className="text-xl text-white">Save your new expense</p>
      <article className="flex h-80 w-80 items-center justify-center rounded-md bg-gray-200">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <label
            htmlFor="new-expense-title-input"
            className="flex flex-col gap-3"
          >
            <p className="text-lg font-semibold">Title</p>
            <input
              type="text"
              name="title"
              className="h-10 w-56 rounded-sm border-[1px] border-purple-400 bg-transparent p-3 outline-none"
              id="new-expense-title-input"
              value={expense.title}
              onChange={handleExpenseInputs}
              required
            />
          </label>
          <label
            htmlFor="new-expense-value-input"
            className="flex flex-col gap-3"
          >
            <p className="text-lg font-semibold">Value</p>
            <input
              type="text"
              name="value"
              className="h-10 w-56 rounded-sm border-[1px] border-purple-400 bg-transparent p-3 outline-none hover:appearance-none"
              id="new-expense-value-input"
              value={expense.value}
              onChange={handleExpenseInputs}
              required
            />
          </label>
          <button className="rounded-md bg-purple-400 p-2 text-white">
            Add
          </button>
        </form>
      </article>
    </section>
  );
};

export default Form;
