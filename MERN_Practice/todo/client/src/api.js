import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const todoApi = {
  getAllTodo: async () => api.get('/'),
  getTodoById: async (id) => api.get(`/${id}`),
  addTodo: async (data) => api.post('/add', data),
  updateTodo: async (id, data) => api.patch(`/update/${id}`, data),
  deleteTodo: async (id) => api.delete(`/delete/${id}`),
};

export default api;
