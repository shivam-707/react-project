# ⚛️ React State — Hands-on Practice

A React project built with **Vite** to explore and practice core **state management** concepts using the `useState` hook. This project contains several interactive mini-components that demonstrate different real-world patterns of managing state in React.

---

## 📁 Project Structure

```
react-state/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.jsx          # Root component — renders TodoList
│   ├── Counter.jsx      # Demonstrates functional state updates
│   ├── LikeButton.jsx   # Toggle state with boolean
│   ├── LudoBoard.jsx    # Object state with multiple fields
│   ├── TodoList.jsx     # Full CRUD with array state
|   |── LotteryGame.jsx
│   ├── App.css
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## 🧩 Components & Concepts

### 🔢 Counter — Functional State Updates
**File:** `src/Counter.jsx`

Demonstrates how React batches state updates and why **functional updater form** matters.

```jsx
const [count, setCount] = useState(0);

// Calls setCount twice using the functional form — increments by 2 per click
const inCount = () => {
  setCount(curr => curr + 1);
  setCount(curr => curr + 1);
};
```

> **Key concept:** Using `setCount(curr => curr + 1)` instead of `setCount(count + 1)` ensures each update builds on the latest state, avoiding stale closure bugs.

---

### ❤️ LikeButton — Boolean Toggle State
**File:** `src/LikeButton.jsx`

A simple like/unlike toggle that shows how to flip a boolean state and apply conditional styles.

```jsx
const [isLiked, setIsLiked] = useState(false);

// Toggle on click
<p onClick={() => setIsLiked(!isLiked)} style={isLiked ? { color: "red" } : {}}>
  <i className={`fa-regular fa-heart ${isLiked ? "fas" : ""}`}></i>
</p>
```

> **Key concept:** Boolean state + conditional className and inline style for dynamic UI feedback.

---

### 🎲 LudoBoard — Object State Management
**File:** `src/LudoBoard.jsx`

Tracks move counts for 4 players (Blue, Yellow, Green, Red) as a single **object in state**, and logs a move history as an array.

```jsx
const [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
const [arr, setArr] = useState([""]);

// Mutate then spread — triggers re-render
const updateBlue = () => {
  moves.blue += 1;
  setMoves(prev => ({ ...prev }));
  setArr(prev => [...prev, "blue moves"]);
};
```

> **Key concept:** Spreading object state (`{ ...prev }`) to create a new reference so React detects the change and re-renders.

---

### ✅ TodoList — Full CRUD with Array State
**File:** `src/TodoList.jsx`

A fully functional to-do list that demonstrates **create, delete, and update** operations on an array held in state.

| Feature | Description |
|---|---|
| ➕ Add Task | Appends a new todo with a unique UUID |
| ❌ Delete Task | Filters out a todo by its `id` |
| 🔠 Uppercase One | Updates a single todo's text using `map` |
| 🔠 Uppercase All | Maps over all todos and transforms text |

```jsx
// Add
setTodos(prev => [...prev, { task: newTodo, id: uuidv4() }]);

// Delete
setTodos(prev => prev.filter(todo => todo.id !== id));

// Update one
setTodos(prev => prev.map(todo =>
  todo.id === id ? { ...todo, task: todo.task.toUpperCase() } : todo
));
```

> **Key concept:** Never mutate array state directly — always return a new array using spread, `filter`, or `map`.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- npm

### Installation

```bash
# Navigate to the project folder
cd react-state

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | ^19.2.7 | UI library |
| Vite | ^8.1.0 | Build tool & dev server |
| uuid / uuidv4 | ^6.2.13 | Unique IDs for todo items |
| ESLint | ^10.5.0 | Code linting |

---

## 📚 Concepts Covered

- ✅ `useState` hook — primitives, booleans, objects, arrays
- ✅ Functional updater form: `setState(prev => ...)`
- ✅ Immutable state updates (spread, filter, map)
- ✅ Controlled inputs with `onChange`
- ✅ Conditional rendering & dynamic styles
- ✅ Unique keys with UUIDs in lists

---

## 👤 Author

**Shivam Midha**  
GitHub: [@shivam-707](https://github.com/shivam-707)
