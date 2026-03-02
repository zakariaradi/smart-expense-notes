# 💰 Smart Expense Notes

**Smart Expense Notes** is a clean and intuitive web application that helps users track their daily expenses using **natural language input**.

Instead of filling out complex forms, users can simply write notes such as:

Coffee 25  
Uber to work 18  
Dinner pizza 60  

The application automatically **extracts the amount**, **detects the category**, **stores the data**, and **calculates totals** in real time.

---

## 🚀 Tech Stack

- React (Vite)
- Tailwind CSS
- JavaScript (ES6+)
- Local Storage

---

## ✅ Features

- 📝 Add expenses using a single natural text input  
- 🔢 Automatic amount extraction from text  
- 🏷️ Automatic category detection (Food, Transport, Bills, Other)  
- 📋 Dynamic expense list with clean card-based UI  
- 💰 Real-time total expense calculation  
- 🗑️ Delete expenses with instant UI updates  
- 🔔 Toast notifications for user feedback  
- 💾 Persistent storage using `localStorage`  
- ⚠️ Input validation and error handling  
- ✨ Smooth micro-interactions and animations  
- 📱 Fully responsive UI built with Tailwind CSS  

---

## 🧠 How It Works

1. The user enters a note (e.g. `Coffee 25`)
2. The app:
   - Extracts the numeric amount from the text
   - Detects the expense category using keywords
   - Saves the expense in `localStorage`
3. The UI updates instantly to display:
   - Expense description
   - Category badge
   - Amount
   - Updated total spending

All changes persist automatically after page refresh.

---

## 📦 Installation & Setup

Clone the repository and run:

```bash
npm install
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## 📁 Project Structure

```
src/
 ├─ components/
 │   ├─ ExpenseInput.jsx
 │   ├─ ExpenseList.jsx
 │   ├─ ExpenseItem.jsx
 │   ├─ TotalExpense.jsx
 │   └─ Toast.jsx
 ├─ utils/
 │   ├─ parseExpense.js
 │   ├─ detectCategory.js
 │   └─ calculateTotal.js
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css
```

---

## 🎯 Purpose of the Project

This project was built as part of a **Front-End Capstone**, with the goal of demonstrating:

- Component-based architecture  
- Clean and predictable state management  
- Separation of concerns  
- Practical React patterns  
- Real-world UX-focused feature implementation  
- Professional UI/UX design practices  

---

## ✨ Future Improvements

- ✏️ Edit existing expenses  
- 📅 Date-based filtering  
- 📊 Monthly summaries and analytics  
- 📤 Export expenses (CSV / PDF)  
- 🌙 Dark mode  

---

## 👤 Author

**Zakaria Radi**  
Built with ❤️ as a learning-focused capstone project.