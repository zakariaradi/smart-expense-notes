export default function ExpenseItem({ expense }) {
  return (
    <div className="flex justify-between items-center border rounded p-2">
      <span className="text-gray-700">
        {expense.text}
      </span>

      <span className="font-semibold">
        {expense.amount} MAD
      </span>
    </div>
  );
}