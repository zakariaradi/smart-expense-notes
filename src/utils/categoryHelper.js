export function getCategoryColor(category) {
  switch (category) {
    case "Food":
      return "bg-green-100 text-green-600";
    case "Transport":
      return "bg-blue-100 text-blue-600";
    case "Bills":
      return "bg-red-100 text-red-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
}