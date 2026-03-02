import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses, onDelete }) {

  if (expenses.length === 0) {
    return (
      <div
        className="bg-gray-50 border border-dashed 
                   border-gray-200 rounded-2xl 
                   py-12 text-center space-y-2 
                   animate-fade-in"
      >
        <p className="text-lg text-gray-500 font-medium">
          No expenses yet
        </p>
        <p className="text-sm text-gray-400">
          Start by adding your first expense above
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {expenses.map((expense, index) => (
        <div
          key={expense.id}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 60}ms` }}
        >
          <ExpenseItem
            expense={expense}
            onDelete={onDelete}   
          />
        </div>
      ))}
    </div>
  );
}