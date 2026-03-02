import { calculateTotal } from "../utils/calculateTotal";

export default function TotalExpense({ expenses }) {
  const total = calculateTotal(expenses);

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 
                    rounded-2xl p-6 shadow-sm 
                    flex justify-between items-center">

      <div>
        <p className="text-sm text-gray-500">
          Total Expenses
        </p>
        <h2 className="text-3xl font-bold text-indigo-600 mt-1">
          {total.toFixed(2)} MAD
        </h2>
      </div>

      <div className="bg-indigo-600 text-white 
                      px-4 py-2 rounded-xl text-sm font-medium">
        {expenses.length} Items
      </div>

    </div>
  );
}