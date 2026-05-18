// If using real API instead of localStorage
import { api } from '../../../services/api'

export const todoService = {
  getAll: () => api.get('/todos'),
  create: (todo) => api.post('/todos', todo),
  update: (id, todo) => api.put(`/todos/${id}`, todo),
  delete: (id) => api.delete(`/todos/${id}`),
}