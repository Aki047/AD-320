import React, { useState } from 'react';

function TaskManager() {
    // State to hold the list of tasks. Each task is an object with id, title, and completed properties.
    const [tasks, setTasks] = useState([]);

    // Function to add a new task. Triggered when the "Add Task" button is clicked.
    function addTask() {
        // Creating a new task object with a unique ID (using the current timestamp),
        // a placeholder title, and a default completed status of false.
        const newTask = {
            id: Date.now(),
            title: "New Task", // Placeholder title, could be enhanced to accept user input
            completed: false, // New tasks start as not completed
        };
        // Updating the tasks state to include the new task.
        // Using spread syntax to create a new array with all existing tasks, plus the new task.
        setTasks([...tasks, newTask]);
    }

    // Function to toggle the completion status of a task.
    function toggleTaskCompletion(taskId) {
        // Creating a new array of tasks where the task with the given id has its
        // "completed" status toggled. Other tasks remain unchanged.
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        // Updating the tasks state with the new array.
        setTasks(updatedTasks);
    }

    // Rendering the task manager UI
    return (
        <div>
            {/* Button to add a new task */}
            <button onClick={addTask}>Add Task</button>
            {/* List of tasks */}
            <ul>
                {tasks.map(task => (
                    // Rendering each task as a list item
                    <li key={task.id}>
                        {task.title} - {task.completed ? "Completed" : "Pending"}
                        {/* Button to toggle the completion status of a task */}
                        <button onClick={() => toggleTaskCompletion(task.id)}>Toggle Completion</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskManager;

