import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import './TaskList.css'

const TaskList = ({tasks, onEditTask, onDeleteTask}) => {
  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onEdit={() => onEditTask(task.id)} // Pass task.id for editing
                onDelete={() => onDeleteTask(task.id)} // Pass task.id for deleting
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-task-available-text">No tasks available.</p>
      )}
    </div>
  )
}

export default TaskList
