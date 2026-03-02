import { useState, useEffect, useRef } from "react";
import ExpenseInput from "./components/ExpenseInput";
import ExpenseList from "./components/ExpenseList";
import TotalExpense from "./components/TotalExpense";
import Toast from "./components/Toast";
import { parseExpense } from "./utils/parseExpense";
import { detectCategory } from "./utils/detectCategory";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState("");
  const [toast, setToast] = useState("");

  const toastTimeoutRef = useRef(null);

  /* ======================================
     Load expenses from localStorage
  ====================================== */
  useEffect(() => {
    try {
      const saved = localStorage.getItem("expenses");
      if (saved) {
        setExpenses(JSON.parse(saved));
      }
    } catch (err) {
      console.error("Failed to parse saved expenses:", err);
      localStorage.removeItem("expenses");
    }
  }, []);

  /* ======================================
     Save expenses to localStorage
  ====================================== */
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  /* ======================================
     Helper: Show Toast safely
  ====================================== */
  const showToast = (message, duration = 2500) => {
    setToast(message);

    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }

    toastTimeoutRef.current = setTimeout(() => {
      setToast("");
    }, duration);
  };

  /* ======================================
     Add Expense
  ====================================== */
  const handleAddExpense = (text) => {
    setError("");

    const amount = parseExpense(text);

    if (!amount || isNaN(amount) || amount <= 0) {
      setError("Please include a valid amount in your note.");
      return;
    }

    const newExpense = {
      id: crypto.randomUUID(),
      text,
      amount,
      category: detectCategory(text),
      createdAt: new Date().toISOString(),
    };

    setExpenses((prev) => [newExpense, ...prev]);

    showToast("Expense added successfully");
  };

  /* ======================================
     Delete Expense
  ====================================== */
  const handleDeleteExpense = (id) => {
    setExpenses((prev) =>
      prev.filter((expense) => expense.id !== id)
    );

    showToast("Expense deleted", 2000);
  };

  /* ======================================
     Cleanup (Prevent memory leaks)
  ====================================== */
  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 space-y-6">

        {/* Header */}
        <div className="text-center space-y-1">
          <h1 className="text-3xl font-bold text-gray-800">
            Smart Expense Notes
          </h1>
          <p className="text-sm text-gray-500">
            Track your expenses using natural language
          </p>
        </div>

        {/* Input */}
        <ExpenseInput onAddExpense={handleAddExpense} />

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 text-red-600 text-sm p-3 rounded-xl">
            {error}
          </div>
        )}

        {/* Total */}
        <TotalExpense expenses={expenses} />

        {/* List */}
        <ExpenseList
          expenses={expenses}
          onDelete={handleDeleteExpense}
        />

      </div>

      {/* Toast */}
      <Toast message={toast} />
    </div>
  );
}

export default App;