import React, { useCallback, useEffect, useState } from 'react';
import { todoApi } from '../api.js';
import TodoList from '../components/TodoList.jsx';
import TodoForm from '../components/TodoForm.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { token, logout, user } = useAuth();
  const navigate = useNavigate();

  const fetchTodos = useCallback(async () => {
    if (!token) {
      setError('No authentication token found');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await todoApi.getAllTodo();
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);

      if (error.response?.status === 401) {
        setError('Session expired. Please login again.');
        logout();
        navigate('/login');
      } else if (error.response?.status === 404) {
        setTodos([]);
      } else {
        setError(error.response?.data?.message || 'Failed to fetch todos');
      }
    } finally {
      setLoading(false);
    }
  }, [token, logout, navigate]);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleAddTodo = async (newTodo) => {
    try {
      const response = await todoApi.addTodo(newTodo);
      setTodos((prev) => [...prev, response.data.newTodo]);
    } catch (error) {
      console.error('Error adding todo:', error);
      throw error;
    }
  };

  const handleUpdateTodo = async (id, updatedData) => {
    try {
      const response = await todoApi.updateTodo(id, updatedData);
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo._id === id ? response.data.todo : todo))
      );
    } catch (error) {
      console.error('Error updating todo:', error);
      alert(error.response?.data?.message || 'Error updating todo');
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await todoApi.deleteTodo(id);
      setTodos((prev) => prev.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
      alert(error.response?.data?.message || 'Error deleting todo');
    }
  };

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 pb-6 border-b border-border">
          <div>
            <h1 className="text-3xl lg:text-4xl font-semibold text-text-primary mb-2">
              My Todo List
            </h1>
            {user && (
              <p className="text-text-secondary text-lg">
                Welcome back, <span className="text-primary">{user.name}</span>!
              </p>
            )}
          </div>
          <button
            onClick={logout}
            className="mt-4 lg:mt-0 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors duration-200 font-semibold border border-primary/20"
          >
            Logout
          </button>
        </div>

        <TodoForm onAdd={handleAddTodo} />

        {loading && (
          <div className="text-center py-12">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-text-secondary text-lg">Loading your todos...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-6 py-4 rounded-lg mb-6">
            <div className="flex justify-between items-center">
              <span>{error}</span>
              <button
                onClick={fetchTodos}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200"
              >
                Retry
              </button>
            </div>
          </div>
        )}

        {!loading && !error && (
          <TodoList
            todos={todos}
            onDelete={handleDeleteTodo}
            onUpdate={handleUpdateTodo}
          />
        )}
      </div>
    </div>
  );
};

export default TodoPage;