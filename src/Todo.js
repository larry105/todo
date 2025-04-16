// Todo.js
import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const handleToggle = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Add this to handle Enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">My To-Do List</h1>
      <div className="todo-input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown} 
          placeholder="Enter a task..."
          className="todo-input"
        />
        <button onClick={handleAdd} className="todo-add-btn">Add</button>
      </div>
      <ul className="todo-list">
        {tasks.map((t, index) => (
          <li key={index} className={`todo-item ${t.completed ? 'completed' : ''}`}>
            <span onClick={() => handleToggle(index)}>{t.text}</span>
            <button onClick={() => handleDelete(index)} className="todo-delete-btn">✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
