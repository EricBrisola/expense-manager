import { ExpensesContext } from "../../contexts/ExpensesContext";
import { useContext } from "react";
import Modal from "../Modal";
import dayjs from "dayjs";

const Form = () => {
  const { expense, handleSubmit, handleExpenseInputs } =
    useContext(ExpensesContext);

  //console.log(allExpenses);
  // console.log(expense);
  // console.log(customDate);

  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-16 bg-purple-400">
      <p className="text-xl text-white">Save your new expense below!</p>
      <article className="flex h-[27rem] w-80 items-center justify-center rounded-md bg-zinc-300 shadow-lg">
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
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">Date</p>
            <input
              id="new-expense-date-input"
              type="date"
              name="date"
              className="h-10 w-56 rounded border-[1px] border-purple-100 bg-transparent p-3 outline-none focus:border-2 focus:border-purple-300"
              onChange={handleExpenseInputs}
              value={expense.date}
              max={dayjs().format("YYYY-MM-DD")}
            />
          </div>
          <button className="rounded-md bg-purple-200 p-2 text-white shadow-sm shadow-purple-100/20 duration-200 hover:shadow-lg hover:shadow-purple-100/40">
            Add
          </button>
        </form>
      </article>
      {/* {isModalOpen && (
        <Modal closeModal={closeModal}>
          <div className="flex h-36 w-48 flex-col items-center gap-2 rounded bg-purple-200 p-1">
            <div className="flex w-full justify-end">
              <button
                type="button"
                className="relative h-7 w-6 cursor-pointer rounded border-none bg-red-600 pb-1 text-white"
                onClick={closeModal}
              >
                x
              </button>
            </div>
            <div className="flex flex-col gap-3 ">
              <input
                type="date"
                name="date"
                className="h-7 w-[7.5rem] rounded outline-none"
                onChange={(ev) => {
                  hadleCustomDate(ev);
                }}
                value={customDate}
              />
              <button
                className="h-7 w-[7.5rem] rounded-md bg-purple-400 text-white shadow-sm shadow-purple-400/20 duration-200 hover:shadow-lg hover:shadow-purple-400/40"
                onClick={() => {
                  saveChosenDate();
                  closeModal();
                }}
              >
                Save
              </button>
            </div>
          </div>
        </Modal>
      )} */}
    </section>
  );
};

export default Form;
