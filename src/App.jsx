import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = () => {
    if (!input.trim()) return;

    // استخراج أول رقم موجود في النص
    const amountMatch = input.match(/\d+/);

    if (!amountMatch) {
      alert("Please include an amount in your note.");
      return;
    }

    const amount = parseFloat(amountMatch[0]);

    const newExpense = {
      id: Date.now(),
      text: input,
      amount: amount,
    };

    setExpenses([...expenses, newExpense]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">

        <h1 className="text-2xl font-bold mb-4">
          Smart Expense Notes
        </h1>

        {/* Input Section */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="e.g. Coffee 25"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border p-2 rounded"
          />
          <button
            onClick={handleAddExpense}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>

        {/* Expense List */}
        <ul className="space-y-2">
          {expenses.map((expense) => (
            <li
              key={expense.id}
              className="flex justify-between bg-gray-50 p-2 rounded"
            >
              <span>{expense.text}</span>
              <span className="font-semibold">${expense.amount}</span>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default App;
