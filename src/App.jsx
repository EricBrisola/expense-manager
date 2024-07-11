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
    category: "",
    date: dayjs().format("YYYY-MM-DD"),
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchAllExpenses = () => {
      const expenses = localStorage.getItem("all-expenses");
      if (expenses) setAllExpenses(JSON.parse(expenses));
    };

    fetchAllExpenses();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleExpenseInputs = (ev) => {
    setExpense((prev) => ({
      ...prev,
      id: "" + Math.floor(Math.random() * 100000),
      [ev.target.name]: ev.target.value,
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
      category: "",
      date: dayjs().format("YYYY-MM-DD"),
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

  // const saveChosenDate = () => {
  //   setExpense((prev) => ({
  //     ...prev,
  //     date: dayjs(customDate).format("YYYY-MM-DD"),
  //   }));
  // };

  // const hadleCustomDate = (event) => {
  //   setCustomDate(event.target.value);
  // };

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
          (exp) => dayjs(exp.date).isAfter(dayjs().startOf("week")) == true,
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
          (exp) => dayjs(exp.date).isAfter(dayjs().startOf("month")) == true,
        )
      : [];

  const monthlyTotal =
    lastThirtyDaysExpenses.length > 0
      ? lastThirtyDaysExpenses.reduce((acc, item) => {
          return (acc += +item.value);
        }, 0)
      : 0;

  const allExpensesTotal =
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
        openModal,
        closeModal,
        deleteExpense,
        allExpenses,
        expense,
        dailyTotal,
        dailyExpenses,
        lastSevenDaysExpenses,
        weeklyTotal,
        lastThirtyDaysExpenses,
        monthlyTotal,
        isModalOpen,
        allExpensesTotal,
        categories,
      }}
    >
      <RouterProvider router={router} />
    </ExpensesContext.Provider>
  );
}

export default App;
