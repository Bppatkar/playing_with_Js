import React, { useState } from 'react';
import TodoList from './TodoList';

const TodoForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    isActive: false,
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Title is required');
      return;
    }
    try {
      await onAdd(formData);
      setFormData({ title: '', description: '', isActive: false });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="Title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={onChange}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={onChange}
        ></textarea>
        <label htmlFor="myCheckbox">Active</label>
        <input
          name="isActive"
          type="checkbox"
          id="myCheckbox"
          value={formData.isActive}
          onChange={onChange}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
