import { createSlice } from '@reduxjs/toolkit'
import { generateId, validateTodo } from '../../../utils/helpers'

const loadTodosFromStorage = () => {
  const saved = localStorage.getItem('todos')
  return saved ? JSON.parse(saved) : []
}

const initialState = {
  todos: loadTodosFromStorage(),
  filter: 'all',
  loading: false,
  error: null,
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (validateTodo(action.payload)) {
        const newTodo = {
          id: generateId(),
          text: action.payload.trim(),
          completed: false,
          createdAt: new Date().toISOString(),
        }
        state.todos.push(newTodo)
        localStorage.setItem('todos', JSON.stringify(state.todos))
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
        localStorage.setItem('todos', JSON.stringify(state.todos))
      }
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload
      if (validateTodo(newText)) {
        const todo = state.todos.find(todo => todo.id === id)
        if (todo) {
          todo.text = newText.trim()
          localStorage.setItem('todos', JSON.stringify(state.todos))
        }
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter(todo => !todo.completed)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
  },
})

export const {
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
  setFilter,
  clearCompleted,
} = todoSlice.actions

export default todoSlice.reducer