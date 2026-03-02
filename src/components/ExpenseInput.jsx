import { useState } from "react";

export default function ExpenseInput({ onAddExpense }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!text.trim()) {
      setError("Please enter an expense note.");
      return;
    }

    setIsSubmitting(true);

    onAddExpense(text);

    // Reset state
    setText("");
    setError("");
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setText(e.target.value);

    // Remove error once user starts typing
    if (error) setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="e.g. Paid 120 MAD for groceries"
          value={text}
          onChange={handleChange}
          className={`flex-1 px-4 py-3 rounded-xl border 
            ${
              error
                ? "border-red-400 focus:ring-red-400"
                : "border-gray-200 focus:ring-indigo-500"
            } 
            focus:outline-none focus:ring-2 
            transition duration-200`}
        />

        <button
          type="submit"
          disabled={!text.trim() || isSubmitting}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl 
                     hover:bg-indigo-700 active:scale-95 
                     transition duration-200 shadow-md
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Adding..." : "Add"}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 text-sm p-3 rounded-xl">
          {error}
        </div>
      )}
    </form>
  );
}