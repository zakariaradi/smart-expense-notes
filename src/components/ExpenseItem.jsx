import { Trash2 } from "lucide-react";

const categoryStyles = {
  Food: "bg-green-100 text-green-600",
  Transport: "bg-blue-100 text-blue-600",
  Bills: "bg-red-100 text-red-600",
  Other: "bg-gray-100 text-gray-600",
};

export default function ExpenseItem({ expense, onDelete }) {
  const { id, text, amount, category } = expense;

  const badgeStyle =
    categoryStyles[category] || categoryStyles["Other"];

  return (
    <div
      className="flex justify-between items-center
                 bg-white border border-gray-100
                 rounded-2xl p-4
                 hover:shadow-md hover:-translate-y-1
                 active:scale-[0.99]
                 transition-all duration-200"
    >
      {/* Left Section */}
      <div className="space-y-2">
        <p className="text-gray-800 font-medium break-words">
          {text}
        </p>

        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${badgeStyle}`}
        >
          {category}
        </span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <p className="text-lg font-bold text-indigo-600">
          {Number(amount).toFixed(2)} MAD
        </p>

        {onDelete && (
          <button
            onClick={() => onDelete(id)}
            className="text-red-500 hover:text-red-700
                       hover:scale-110 transition"
            aria-label="Delete expense"
            title="Delete expense"
          >
            <Trash2 size={18} />
          </button>
        )}
      </div>
    </div>
  );
}