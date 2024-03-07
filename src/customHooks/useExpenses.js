import { useState } from "react";
import dayjs from "dayjs";

export default function useExpenses() {
    const [allExpenses, setAllExpenses] = useState([]);
    const [dayExpense, setDayExpense] = useState({
        id: "",
        date: "",
        expenses: []
    });
    const [expense, setExpense] = useState({
        id: "",
        title: "",
        value: ""
    })

    const aux = dayjs('2024-03-05')

    const handleExpenseInputs = (ev) => {
        setExpense(prev => ({
            ...prev,
            id: "" + Math.floor(Math.random() * 100000),
            [ev.target.name]: ev.target.value,
        }));
    };

    const verifyDates = () => {
        return allExpenses[allExpenses.length - 1].date.isAfter(aux)

    }

    const handleAddingNewExpenses = () => {
        const newDayExpense = {
            id: "" + Math.floor(Math.random() * 100000),
            date: dayjs(),
            expenses: [...dayExpense.expenses, expense]
        }

        setDayExpense(prev => ({
            ...prev,
            newDayExpense
        }))
        return newDayExpense
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();

        if (allExpenses.length < 1) {
            const newDayExpense = handleAddingNewExpenses
            setAllExpenses(prev => [...prev, newDayExpense]);
        }
        else {
            if (verifyDates) {
                const newDayExpense = handleAddingNewExpenses
                setAllExpenses(prev => [...prev, newDayExpense]);
            }
            else {
                const mostRecentDay = allExpenses[allExpenses.length - 1]
                mostRecentDay.expenses = [...mostRecentDay.expenses, expense]
                const allExpensesClone = allExpensesClone.pop()
                setDayExpense(mostRecentDay)
                setAllExpenses(prev => {
                    [...prev, dayExpense]
                })
            }
        }


        //setAllExpenses(prev => [...prev, newDayExpense]);

        setExpense({
            ...expense,
            title: "",
            value: "",
        });
        //console.log(allExpenses);
    };

    return {
        allExpenses,
        expense,
        dayExpense,
        handleExpenseInputs,
        handleSubmit
    }
}