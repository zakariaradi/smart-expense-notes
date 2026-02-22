# 💰 Smart Expense Notes

**Smart Expense Notes** is a simple and intuitive web application that allows users to track daily expenses using **natural text input**.

Instead of filling out traditional forms, users can simply type notes like:

Coffee 25  
Uber to work 18  
Dinner pizza 60  

The application automatically **extracts the amount**, **detects the category**, **stores the data**, and **calculates totals**.

---

## 🚀 Tech Stack

- React (Vite)
- Tailwind CSS
- JavaScript (ES6)
- Local Storage

---

## ✅ Features

- 📝 Add expenses using a single natural text input  
- 🔢 Automatic amount extraction from text  
- 🏷️ Automatic category suggestion (Food, Transport, Bills, Other)  
- 📋 Dynamic expense list rendering  
- 💰 Total expense calculation  
- 💾 Persistent storage using `localStorage`  
- ⚠️ Input validation and user feedback  
- 📱 Responsive and clean UI with Tailwind CSS  

---

## 🧠 How It Works

1. User enters a note (e.g. `Coffee 25`)
2. The app:
   - Extracts the numeric amount
   - Detects the expense category
   - Stores the expense in local storage
3. Expenses are displayed instantly with:
   - Category badge
   - Amount
   - Updated total spending

---

## 📦 Installation & Setup

Clone the repository and run:

```bash
npm install
npm run dev

 The application will be available at:

http://localhost:5173


📁 Project Structure
src/
 ├─ components/
 │   ├─ ExpenseInput.jsx
 │   ├─ ExpenseList.jsx
 │   ├─ ExpenseItem.jsx
 │   └─ TotalExpense.jsx
 ├─ utils/
 │   ├─ parseExpense.js
 │   ├─ detectCategory.js
 │   └─ calculateTotal.js
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css


🎯 Purpose of the Project

This project was built as part of a Front-End Capstone, with the goal of demonstrating:

Component-based architecture

Clean state management

Separation of concerns

Practical React patterns

Real-world feature implementation

✨ Future Improvements

Edit and delete expenses

Date-based filtering

Monthly summaries

Export data

👤 Author
zakaria radi
Built with ❤️ as a learning-focused capstone project.