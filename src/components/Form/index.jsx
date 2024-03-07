import useExpenses from "../../customHooks/useExpenses";

const Form = () => {
  const {
    allExpenses,
    expense,
    dayExpense,
    handleExpenseInputs,
    handleSubmit,
  } = useExpenses();

  return (
    <section className="flex flex-1 items-center justify-center bg-purple-400 ">
      <article className="flex h-96 w-96 items-center justify-center rounded-md bg-purple-300">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="new-expense-title-input">
            <p className="text-white">Title</p>
            <input
              type="text"
              name="title"
              id="new-expense-title-input"
              value={expense.title}
              onChange={handleExpenseInputs}
            />
          </label>
          <label htmlFor="new-expense-value-input">
            <p className="text-white">Value</p>
            <input
              type="number"
              name="value"
              id="new-expense-value-input"
              value={expense.value}
              onChange={handleExpenseInputs}
            />
          </label>
          <button className="rounded-md bg-purple-400 p-2 text-white">
            Add
          </button>
        </form>
      </article>
      <section className="h-96 w-96 bg-purple-300 text-white">
        <p>Gastos:</p>
        {allExpenses ? (
          allExpenses.map((exp) => {
            return (
              <article key={exp.id}>
                <p>Dia: {exp.date.format("DD/MM/YYYY")}</p>
                {exp.expenses ? (
                  exp.expenses.map((e) => {
                    return (
                      <div key={e.id}>
                        <p>{e.title}</p>
                        <p>R${e.value}</p>
                      </div>
                    );
                  })
                ) : (
                  <p>Nenhum gasto nesse dia</p>
                )}
              </article>
            );
          })
        ) : (
          <p>Sem nenhum gasto</p>
        )}
      </section>
    </section>
  );
};

export default Form;
