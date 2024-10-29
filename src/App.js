import React from "react";
import { useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import About from "./About"; 
import Service from "./Service";
import Singup from "./Singup";

function Home() {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      const newTaskItem = { text: newTask, completed: false };
      setTasks([...tasks, newTaskItem]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <section id="home">
        <h1>Welcome to imperial-moto-forum</h1>
        <p>This is a forum for riders.</p>
      </section>
      <div>
        <input
          type="text"
          placeholder="Add new post..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add post</button>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              <div className="post">
                {" "}
                <h4>{task.text}</h4>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Log-in</Link>
            </li>
            <li>
              <Link to="/singup">Sign-up</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/singup" element={<Singup />} />
      </Routes>

      <footer>
        <p>
          &copy; 2024 Created by Raul Ungur.This site is in develop progress.
        </p>
      </footer>
    </div>
  );
}

export default App;
