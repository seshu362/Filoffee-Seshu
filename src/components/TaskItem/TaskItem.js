import './TaskItem.css'

const TaskItem = ({task, onEdit, onDelete}) => {
  return (
    <tr className="task-item">
      <td>{task.title}</td>
      <td className="task-description">{task.description}</td>
      <td>{task.dueDate}</td>
      <td>{task.status}</td>
      <td className="edit-delete-btn">
        <button type="button" onClick={onEdit}>Edit</button>
        <button type="button" className="delete" onClick={onDelete}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default TaskItem
