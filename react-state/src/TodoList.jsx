import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    const [todos, setTodos] = useState([{task: "sample", id: uuidv4(), completed: false}]);
    let [newTodo, setNewTodo] = useState("");

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let addNewTask = () => {
        setTodos( (prevTodos) => {
            return [...prevTodos, {task: newTodo, id: uuidv4(), completed: false}]
        });
        setNewTodo("");
    }

    let deleteTask = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodo) => prevTodo.id !== id));
    }

    let upperCaseAll = () => {
        setTodos((prevTodos) => (prevTodos.map((todo) => {
            return {
                ...todo,
                task: todo.task.toUpperCase(),
            };
        })));
    }

    let upperCaseOne = (id) => {
        setTodos((prevTodos) => (prevTodos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            }
            else {return todo;}
        })));
    }

    let toggleComplete = (id) => {
        setTodos((prevTodos) => (prevTodos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            }
            else {return todo;}
        })));
    }

    return(
        <div>
            <input placeholder="Add a Task" value={newTodo} onChange={updateTodoValue}></input>
            <br></br>
            <button onClick={addNewTask}>Add</button>
            <br></br><br></br><br></br>
            <h3>Task List</h3>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.task}
                        </span>
                        &nbsp; &nbsp;
                        <button onClick={() => deleteTask(todo.id)}>Delete</button>
                        <button onClick={() => upperCaseOne(todo.id)}>Uppercase</button>
                        <input type="checkbox" checked={todo.completed} onClick={() => toggleComplete(todo.id)}></input>
                    </li>
                ))}
            </ul>
            <br></br>
            <button onClick={upperCaseAll}>Uppercase All</button>
        </div>
    );
}
