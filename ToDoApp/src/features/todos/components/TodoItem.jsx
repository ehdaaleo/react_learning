import { useState } from 'react'
import { ListGroup, Form, Button } from 'react-bootstrap'
import { FaTrash, FaEdit, FaSave, FaTimes } from 'react-icons/fa'
import { formatDate } from '../../../utils/helpers'

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleSave = () => {
    if (editText.trim() && editText !== todo.text) {
      onEdit(todo.id, editText)
    }
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditText(todo.text)
    setIsEditing(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave()
    }
  }

  if (isEditing) {
    return (
      <ListGroup.Item className="py-3">
        <div className="d-flex gap-2">
          <Form.Control
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyPress={handleKeyPress}
            autoFocus
          />
          <Button size="sm" variant="success" onClick={handleSave}>
            <FaSave />
          </Button>
          <Button size="sm" variant="secondary" onClick={handleCancel}>
            <FaTimes />
          </Button>
        </div>
      </ListGroup.Item>
    )
  }

  return (
    <ListGroup.Item className="py-3">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center flex-grow-1">
          <Form.Check
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="me-3"
          />
          <div>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? '#6c757d' : '#000',
              }}
            >
              {todo.text}
            </span>
            <small className="d-block text-muted">
              Created: {formatDate(todo.createdAt)}
            </small>
          </div>
        </div>
        <div className="d-flex gap-2">
          <Button size="sm" variant="outline-primary" onClick={() => setIsEditing(true)}>
            <FaEdit />
          </Button>
          <Button size="sm" variant="outline-danger" onClick={() => onDelete(todo.id)}>
            <FaTrash />
          </Button>
        </div>
      </div>
    </ListGroup.Item>
  )
}

export default TodoItem
