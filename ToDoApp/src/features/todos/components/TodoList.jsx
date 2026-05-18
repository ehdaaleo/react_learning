import { ListGroup } from 'react-bootstrap'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  if (todos.length === 0) {
    return (
      <div className="text-center text-muted py-5">
        <p className="mb-0">No tasks to display</p>
        <small>Add a new task to get started!</small>
      </div>
    )
  }

  return (
    <ListGroup variant="flush">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ListGroup>
  )
}

export default TodoList
