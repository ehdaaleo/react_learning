import { useSelector, useDispatch } from 'react-redux'
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
  setFilter,
  clearCompleted,
} from '../services/todoSlice'
import { filterTodos } from '../../../utils/helpers'

export const useTodos = () => {
  const dispatch = useDispatch()
  const { todos, filter } = useSelector((state) => state.todos)

  const filteredTodos = filterTodos(todos, filter)

  return {
    todos: filteredTodos,
    allTodos: todos,
    filter,
    stats: {
      total: todos.length,
      completed: todos.filter(t => t.completed).length,
      pending: todos.filter(t => !t.completed).length,
    },
    addTodo: (text) => dispatch(addTodo(text)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    editTodo: (id, newText) => dispatch(editTodo({ id, newText })),
    setFilter: (filter) => dispatch(setFilter(filter)),
    clearCompleted: () => dispatch(clearCompleted()),
  }
}