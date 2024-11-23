import {useState, useEffect} from 'react'
import './AddTaskForm.css'

const AddTaskForm = ({onAddTask, onEditTask, taskToEdit}) => {
  const [taskDetails, setTaskDetails] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
  })

  useEffect(() => {
    if (taskToEdit) {
      setTaskDetails(taskToEdit) // Update form with task data when editing
    }
  }, [taskToEdit])

  const handleInputChange = e => {
    const {name, value} = e.target
    setTaskDetails({...taskDetails, [name]: value})
  }

  const handleSubmit = () => {
    if (taskToEdit) {
      onEditTask(taskDetails) // Pass updated task details to parent
    } else {
      onAddTask(taskDetails) // Add new task
    }
    setTaskDetails({title: '', description: '', dueDate: '', status: 'Pending'}) // Reset form
  }

  return (
    <div className="add-task-form">
      <h3>{taskToEdit ? 'Edit Task' : 'Add Task'}</h3>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={taskDetails.title}
        onChange={handleInputChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={taskDetails.description}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="dueDate"
        value={taskDetails.dueDate}
        onChange={handleInputChange}
      />
      <select
        name="status"
        value={taskDetails.status}
        onChange={handleInputChange}
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="button" onClick={handleSubmit}>
        {taskToEdit ? 'Update Task' : 'Add Task'}
      </button>
    </div>
  )
}

export default AddTaskForm
