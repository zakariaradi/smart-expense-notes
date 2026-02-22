const categoryColors = {
  Food: "bg-green-200",
  Transport: "bg-blue-200",
  Bills: "bg-red-200",
  Other: "bg-gray-200",
};

export default function ExpenseItem({ expense }) {
  return (
    <div className="flex justify-between items-center border rounded p-2">
      <div>
        <p>{expense.text}</p>
        <span
          className={`text-xs px-2 py-1 rounded ${
            categoryColors[expense.category]
          }`}
        >
          {expense.category}
        </span>
      </div>

      <span className="font-semibold">
        {expense.amount} MAD
      </span>
    </div>
  );
}