import { useState } from "react";
import ExpenseInput from "./components/ExpenseInput";
import ExpenseList from "./components/ExpenseList";
import { parseExpense } from "./utils/parseExpense";

function App() {
  const [expenses, setExpenses] = useState([]);

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
    };

    setExpenses((prev) => [...prev, newExpense]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow space-y-4">
        <h1 className="text-2xl font-bold">
          Smart Expense Notes
        </h1>

        <ExpenseInput onAddExpense={handleAddExpense} />
        <ExpenseList expenses={expenses} />
      </div>
    </div>
  );
}

export default App;