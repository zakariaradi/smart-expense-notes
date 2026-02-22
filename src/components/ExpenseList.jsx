import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses }) {
  if (expenses.length === 0) {
    return (
      <p className="text-gray-500 text-center">
        No expenses yet
      </p>
    );
  }

  return (
    <div className="space-y-2">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
}