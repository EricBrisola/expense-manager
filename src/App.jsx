import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/router";
import { ExpensesContext } from "./contexts/ExpensesContext";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

function App() {
  const [allExpenses, setAllExpenses] = useState([]);
  const [expense, setExpense] = useState({
    id: "",
    title: "",
    value: "",
    date: "",
  });

  useEffect(() => {
    const expenses = localStorage.getItem("all-expenses");
    if (expenses) setAllExpenses(JSON.parse(expenses));
  }, []);

  const handleExpenseInputs = (ev) => {
    setExpense((prev) => ({
      ...prev,
      id: "" + Math.floor(Math.random() * 100000),
      [ev.target.name]: ev.target.value,
      date: dayjs().format("DD/MM/YYYY"),
    }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    setAllExpenses((prev) => {
      const updatedExpenses = [...prev, expense];
      localStorage.setItem("all-expenses", JSON.stringify(updatedExpenses));
      return updatedExpenses;
    });

    setExpense({
      ...expense,
      title: "",
      value: "",
    });
  };

  const dailyTotal =
    allExpenses.length > 0
      ? allExpenses.reduce((acc, item) => {
          return (acc += +item.value);
        }, 0)
      : 0;

  return (
    <ExpensesContext.Provider
      value={{
        handleSubmit,
        handleExpenseInputs,
        allExpenses,
        expense,
        dailyTotal,
      }}
    >
      <RouterProvider router={router} />
    </ExpensesContext.Provider>
  );
}

export default App;
