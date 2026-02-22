import { useState, useEffect } from "react";
import ExpenseInput from "./components/ExpenseInput";
import ExpenseList from "./components/ExpenseList";
import TotalExpense from "./components/TotalExpense";
import { parseExpense } from "./utils/parseExpense";
import { detectCategory } from "./utils/detectCategory";

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("expenses");
    if (saved) {
      try {
        setExpenses(JSON.parse(saved));
      } catch {
        localStorage.removeItem("expenses");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = (text) => {
    const amount = parseExpense(text);

    if (!amount) {
      alert("Please include a valid amount in your note.");
      return;
    }

    const newExpense = {
      id: Date.now(),
      text,
      amount,
      category: detectCategory(text),
    };

    setExpenses((prev) => [...prev, newExpense]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow space-y-4">
        <h1 className="text-2xl font-bold">
          Smart Expense Notes
        </h1>

        <ExpenseInput onAddExpense={handleAddExpense} />
        <ExpenseList expenses={expenses} />
        <TotalExpense expenses={expenses} />
      </div>
    </div>
  );
}

export default App;