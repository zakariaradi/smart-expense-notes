export function parseExpense(text) {
  const match = text.match(/(\d+(\.\d+)?)/);
  return match ? Number(match[0]) : null;
}