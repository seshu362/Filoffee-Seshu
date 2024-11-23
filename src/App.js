import React, { useState, useEffect } from 'react'
import AddTaskForm from './components/AddTaskForm/AddTaskForm'
import TaskList from './components/TaskList/TaskList'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [taskToEdit, setTaskToEdit] = useState(null)

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []
    setTasks(storedTasks)
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = task => {
    setTasks([...tasks, { ...task, id: Date.now() }]) // Ensure task has a unique id
  }

  const editTask = updatedTask => {
    const updatedTasks = tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    )
    setTasks(updatedTasks)
    setTaskToEdit(null) // Clear the editing state after updating
  }

  const deleteTask = taskId => {
    if (window.confirm('Are you sure?')) {
      const updatedTasks = tasks.filter(task => task.id !== taskId)
      setTasks(updatedTasks)
    }
  }

  return (
    <div className="app-container">
      <h1>Task Tracker</h1>
      <AddTaskForm
        onAddTask={addTask}
        onEditTask={editTask}
        taskToEdit={taskToEdit}
      />
      <TaskList
        tasks={tasks}
        onEditTask={taskId => setTaskToEdit(tasks.find(task => task.id === taskId))}
        onDeleteTask={deleteTask}
      />
    </div>
  )
}

export default App
