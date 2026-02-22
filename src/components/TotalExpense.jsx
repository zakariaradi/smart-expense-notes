import { calculateTotal } from "../utils/calculateTotal";

export default function TotalExpense({ expenses }) {
  const total = calculateTotal(expenses);

  return (
    <div className="flex justify-between text-lg font-semibold mt-4">
      <span>Total</span>
      <span>{total} MAD</span>
    </div>
  );
}