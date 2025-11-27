import React, { useCallback, useEffect, useState } from 'react';
import { todoApi } from '../api';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTodos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await todoApi.getAllTodo();
      // console.log(response.data);
      setTodos(response.data);
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || 'Failed to fetch todos');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleAddTodo = async (newTodo) => {
    try {
      const response = await todoApi.addTodo(newTodo);
      setTodos((prev) => [...prev, response.data.newTodo]);
      fetchTodos();
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Error adding todo');
    }
  };
  const handleUpdateTodo = async (id, updatedData) => {
    try {
      const response = await todoApi.updateTodo(id, updatedData);
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo._id === id ? response.data.todo : todo))
      );
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Error updating todo');
    }
  };
  const handleDeleteTodo = async (id) => {
    try {
      await todoApi.deleteTodo(id);
      setTodos((prev) => prev.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Error deleting todo');
    }
  };
  return (
    <div>
      <h2>Simple To-Do List Application</h2>
      <TodoForm onAdd={handleAddTodo} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && (
        <TodoList
          todos={todos}
          onDelete={handleDeleteTodo}
          onUpdate={handleUpdateTodo}
        />
      )}
    </div>
  );
};

export default TodoPage;
