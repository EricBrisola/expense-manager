import { useState } from "react";

export default function useExpenses() {
    const [allExpenses, setAllExpenses] = useState([]);
    const [newExpense, setNewExpense] = useState({
        id: "",
        title: "",
        value: "",
        date: "",
    });

    const handleExpenseInputs = (ev) => {
        setNewExpense({
            ...newExpense,
            id: "" + Math.floor(Math.random() * 100000),
            date: new Date(),
            [ev.target.name]: ev.target.value,
        });
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        setAllExpenses([...allExpenses, newExpense]);
        setNewExpense({
            ...newExpense,
            title: "",
            value: "",
        });
    };

    return {
        allExpenses,
        newExpense,
        handleExpenseInputs,
        handleSubmit
    }
}