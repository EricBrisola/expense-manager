import useExpenses from "../../customHooks/useExpenses";

const Form = () => {
  const { allExpenses, newExpense, handleExpenseInputs, handleSubmit } =
    useExpenses();

  console.log(allExpenses);
  return (
    <section className="flex flex-1 items-center  justify-center bg-purple-400">
      <article className="flex h-96 w-96 items-center justify-center rounded-md bg-purple-300">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="new-expense-title-input">
            <p className="text-white">Title</p>
            <input
              type="text"
              name="title"
              id="new-expense-title-input"
              value={newExpense.title}
              onChange={handleExpenseInputs}
            />
          </label>
          <label htmlFor="new-expense-value-input">
            <p className="text-white">Value</p>
            <input
              type="number"
              name="value"
              id="new-expense-value-input"
              value={newExpense.value}
              onChange={handleExpenseInputs}
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
