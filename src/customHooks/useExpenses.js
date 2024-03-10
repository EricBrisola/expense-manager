import { useState } from "react";
import dayjs from "dayjs";

export default function useExpenses() {
  const [allExpenses, setAllExpenses] = useState([]);
  const [expense, setExpense] = useState({
    id: "",
    title: "",
    value: "",
    date: "",
  });

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

    setAllExpenses((prev) => [...prev, expense]);

    setExpense({
      ...expense,
      title: "",
      value: "",
    });
  };

  console.log(allExpenses);

  return {
    allExpenses,
    expense,
    handleExpenseInputs,
    handleSubmit,
  };
}
