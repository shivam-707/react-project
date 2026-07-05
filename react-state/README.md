# ⚛️ React State — Hands-on Practice

A React + Vite project for practicing core state management concepts with the `useState` hook. The app currently demonstrates controlled form state, object state updates, and reusable component patterns.

---

## 📁 Project Structure

```text
react-state/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── CommentsForm.jsx
│   ├── Counter.jsx
│   ├── Form.jsx
│   ├── LikeButton.jsx
│   ├── LotteryGame.jsx
│   ├── LudoBoard.jsx
│   ├── TodoList.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🧩 What This Project Covers

### 📝 Form State Management
File: `src/Form.jsx`

This example uses a single state object to manage multiple form fields such as full name, username, and password. It shows how to:

- update state based on the input name
- keep form values controlled by React
- reset the form after submit

### 💬 Comments Form
File: `src/CommentsForm.jsx`

This component demonstrates a second form example with a textarea and a numeric rating field. It uses the same pattern of updating object state dynamically.

### 🎯 Other State Examples
The project also includes additional mini components that practice:

- counter updates with functional state setters
- boolean toggle state with a like button
- object state updates in a ludo board
- array state updates for a todo list
- simple game-style state handling in a lottery component

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install Dependencies

```bash
cd react-state
npm install
```

### Run the App

```bash
npm run dev
```

Then open http://localhost:5173 in your browser.

---

## 🛠️ Tech Stack

- React 19
- Vite 8
- ESLint
- uuid for generating unique IDs in practice components

---

## 📚 Concepts Covered

- `useState` for primitive, boolean, object, and array state
- functional updates with `setState(prev => ...)`
- immutable updates using spread, `filter`, and `map`
- controlled inputs with `onChange`
- conditional rendering and dynamic styling

---

## 👤 Author

Shivam Midha  
GitHub: [@shivam-707](https://github.com/shivam-707)
