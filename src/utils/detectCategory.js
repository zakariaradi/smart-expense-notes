const CATEGORY_KEYWORDS = {
  Food: ["coffee", "burger", "pizza", "meal"],
  Transport: ["taxi", "bus", "uber", "train"],
  Bills: ["internet", "electricity", "water"],
};

export function detectCategory(text) {
  const lowerText = text.toLowerCase();

  for (const category in CATEGORY_KEYWORDS) {
    if (
      CATEGORY_KEYWORDS[category].some((word) =>
        lowerText.includes(word)
      )
    ) {
      return category;
    }
  }

  return "Other";
}