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
    const fetchAllExpenses = () => {
      const expenses = localStorage.getItem("all-expenses");
      if (expenses) setAllExpenses(JSON.parse(expenses));
    };

    fetchAllExpenses();
  }, []);

  const handleExpenseInputs = (ev) => {
    setExpense((prev) => ({
      ...prev,
      id: "" + Math.floor(Math.random() * 100000),
      [ev.target.name]: ev.target.value,
      date: dayjs(),
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

  const deleteExpense = (id) => {
    setAllExpenses(() => {
      const newAllExpensesArr = allExpenses.filter((exp) => {
        return exp.id !== id;
      });
      localStorage.setItem("all-expenses", JSON.stringify(newAllExpensesArr));
      return newAllExpensesArr;
    });
  };

  const dailyExpenses =
    allExpenses.length > 0
      ? allExpenses.filter(
          (exp) =>
            dayjs(exp.date).format("DD/MM/YYYY") ==
            dayjs().format("DD/MM/YYYY"),
        )
      : [];

  const dailyTotal =
    dailyExpenses.length > 0
      ? dailyExpenses.reduce((acc, item) => {
          return (acc += +item.value);
        }, 0)
      : 0;

  const lastSevenDaysExpenses =
    allExpenses.length > 0
      ? allExpenses.filter(
          (exp) => dayjs(exp.date).isAfter(dayjs().subtract(7, "day")) == true,
        )
      : [];

  const weeklyTotal =
    lastSevenDaysExpenses.length > 0
      ? lastSevenDaysExpenses.reduce((acc, item) => {
          return (acc += +item.value);
        }, 0)
      : 0;

  const lastThirtyDaysExpenses =
    allExpenses.length > 0
      ? allExpenses.filter(
          (exp) => dayjs(exp.date).isAfter(dayjs().subtract(30, "day")) == true,
        )
      : [];

  const monthlyTotal =
    lastThirtyDaysExpenses.length > 0
      ? lastThirtyDaysExpenses.reduce((acc, item) => {
          return (acc += +item.value);
        }, 0)
      : 0;

  return (
    <ExpensesContext.Provider
      value={{
        handleSubmit,
        handleExpenseInputs,
        deleteExpense,
        allExpenses,
        expense,
        dailyTotal,
        dailyExpenses,
        lastSevenDaysExpenses,
        weeklyTotal,
        lastThirtyDaysExpenses,
        monthlyTotal,
      }}
    >
      <RouterProvider router={router} />
    </ExpensesContext.Provider>
  );
}

export default App;
