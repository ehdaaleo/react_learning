// Generate unique ID
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

// Format date
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

// Filter todos by status
export const filterTodos = (todos, filter) => {
  switch (filter) {
    case 'completed':
      return todos.filter(todo => todo.completed)
    case 'pending':
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}

// Validate todo input
export const validateTodo = (text) => {
  return text && text.trim().length > 0 && text.trim().length <= 100
}