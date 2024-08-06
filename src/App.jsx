import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/router";
import { ExpensesContext } from "./contexts/ExpensesContext";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import foodIcon from "./assets/food-icon.png";
import transportIcon from "./assets/transport-icon.png";
import enterteinmentIcon from "./assets/enterteinment-icon.png";
import homeIcon from "./assets/home-icon.png";
import healthIcon from "./assets/health-icon.png";

function App() {
  const [allExpenses, setAllExpenses] = useState([]);
  const [expenseValue, setExpenseValue] = useState("0,00");
  const [expense, setExpense] = useState({
    id: "",
    title: "",
    value: expenseValue,
    category: "food",
    date: dayjs().format("YYYY-MM-DD"),
  });
  //const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchAllExpenses = () => {
      const expenses = localStorage.getItem("all-expenses");
      if (expenses) setAllExpenses(JSON.parse(expenses));
    };

    fetchAllExpenses();
  }, []);

  const handleExpenseValueChange = (e) => {
    let inputValue = e.target.value;

    // Remove todos os caracteres que não são números
    inputValue = inputValue.replace(/\D/g, "");

    // Adiciona zeros à esquerda se necessário
    while (inputValue.length < 3) {
      inputValue = "0" + inputValue;
    }

    // Formata o valor para incluir a vírgula
    const formattedValue = inputValue.slice(0, -2) + "," + inputValue.slice(-2);

    // Remove zeros à esquerda desnecessários no lado dos reais
    const finalValue = formattedValue.replace(/^0+(?!,)/, "");

    // Se após a remoção dos zeros o valor estiver vazio, atribui "0,00"
    setExpenseValue(finalValue === "" ? "0,00" : finalValue);
  };

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

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
      const updatedExpenses = [
        ...prev,
        { ...expense, value: expenseValue.replace(",", ".") },
      ];
      localStorage.setItem("all-expenses", JSON.stringify(updatedExpenses));
      return updatedExpenses;
    });

    setExpense({
      ...expense,
      title: "",
      value: "",
      category: "food",
      date: dayjs().format("YYYY-MM-DD"),
    });

    setExpenseValue("0,00");
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
      name: "Alimentação",
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

  const categoriesImgHashMap = {
    food: foodIcon,
    transport: transportIcon,
    enterteinment: enterteinmentIcon,
    home: homeIcon,
    health: healthIcon,
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
        handleExpenseValueChange,
        deleteExpense,
        allExpenses,
        expense,
        expenseValue,
        dailyTotal,
        dailyExpenses,
        lastSevenDaysExpenses,
        weeklyTotal,
        lastThirtyDaysExpenses,
        monthlyTotal,
        allExpensesTotal,
        categories,
        categoriesImgHashMap,
      }}
    >
      <RouterProvider router={router} />
    </ExpensesContext.Provider>
  );
}

export default App;
