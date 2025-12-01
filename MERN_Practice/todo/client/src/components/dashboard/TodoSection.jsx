import React, { useState, useEffect } from 'react';
import { todoApi } from '../../api.js';
import Pagination from '../common/Pagination.jsx';
import SearchBar from '../common/SearchBar.jsx';
import LoadingSpinner from '../common/LoadingSpinner.jsx';

const TodoSection = ({ expanded = false }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = [
    { id: 'all', name: 'All', color: 'neutral' },
    { id: 'Work', name: 'Work', color: 'primary' },
    { id: 'Personal', name: 'Personal', color: 'secondary' },
    { id: 'Shopping', name: 'Shopping', color: 'accent' },
    { id: 'Health', name: 'Health', color: 'red' },
    { id: 'Other', name: 'Other', color: 'purple' },
  ];

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const response = await todoApi.getAllTodo();
      setTodos(response.data || []);
    } catch (error) {
      console.error('Error fetching todos:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch =
      todo.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      todo.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || todo.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const paginatedTodos = filteredTodos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredTodos.length / itemsPerPage);

   const getCategoryColor = (category) => {
    const colors = {
      Work: 'text-blue-400 border-blue-400/20 bg-blue-400/10',
      Personal: 'text-green-400 border-green-400/20 bg-green-400/10',
      Shopping: 'text-purple-400 border-purple-400/20 bg-purple-400/10',
      Health: 'text-red-400 border-red-400/20 bg-red-400/10',
      Other: 'text-yellow-400 border-yellow-400/20 bg-yellow-400/10'
    };
    return colors[category] || 'text-text-secondary border-border bg-surface';
  };

  if (loading) {
    return <LoadingSpinner message="Loading todos..." />;
  }

  return (
    <div className="glass-card rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-text-primary">My Todos</h2>
        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
          {filteredTodos.length} items
        </span>
      </div>

      <div className="mb-6">
        <SearchBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          placeholder="Search todos..."
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => {
              setSelectedCategory(category.id);
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
              selectedCategory === category.id
                ? 'bg-primary text-white border-primary'
                : 'bg-surface text-text-secondary border-border hover:bg-surface/80 hover:text-text-primary'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Todo List */}
      <div className={`space-y-4 ${!expanded ? 'max-h-96 overflow-y-auto' : ''}`}>
        {paginatedTodos.length === 0 ? (
          <div className="text-center py-12 text-text-secondary bg-surface rounded-xl border border-border">
            <svg className="w-16 h-16 mx-auto mb-4 text-border" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-lg">No todos found. Create your first todo!</p>
          </div>
        ) : (
          paginatedTodos.map(todo => (
            <div
              key={todo._id}
              className={`p-4 rounded-xl border transition-all duration-200 group hover:border-primary/50 ${
                todo.isActive
                  ? 'bg-surface border-border'
                  : 'bg-surface/50 border-border opacity-75'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${
                    todo.isActive ? 'bg-primary' : 'bg-border'
                  }`}></div>
                  <div>
                    <h3 className={`font-medium ${
                      todo.isActive ? 'text-text-primary' : 'text-text-secondary line-through'
                    }`}>
                      {todo.title}
                    </h3>
                    <p className="text-sm text-text-secondary">{todo.description}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(todo.category)}`}>
                  {todo.category}
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default TodoSection;
