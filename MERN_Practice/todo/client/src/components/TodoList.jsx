import React, { useState } from 'react';

const TodoList = ({ todos, onDelete, onUpdate }) => {
  const [loadingId, setLoadingId] = useState(null);

  const handleToggleStatus = async (todo) => {
    setLoadingId(todo._id);
    try {
      await onUpdate(todo._id, { isActive: !todo.isActive });
    } catch (error) {
      console.error('Error toggling status:', error);
    } finally {
      setLoadingId(null);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this todo?')) {
      return;
    }

    setLoadingId(id);
    try {
      await onDelete(id);
    } catch (error) {
      console.error('Error deleting todo:', error);
      setLoadingId(null);
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      Work: 'text-blue-400 border-blue-400/20 bg-blue-400/10',
      Personal: 'text-green-400 border-green-400/20 bg-green-400/10',
      Shopping: 'text-purple-400 border-purple-400/20 bg-purple-400/10',
      Health: 'text-red-400 border-red-400/20 bg-red-400/10',
      Other: 'text-yellow-400 border-yellow-400/20 bg-yellow-400/10',
    };
    return colors[category] || 'text-text-secondary border-border bg-surface';
  };

  if (todos.length === 0) {
    return (
      <div className="text-center py-12 text-text-secondary bg-surface rounded-xl border border-border">
        <svg
          className="w-16 h-16 mx-auto mb-4 text-border"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <p className="text-lg">No todos yet. Create your first todo above!</p>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-xl p-6 border border-border">
      <h2 className="text-2xl font-semibold text-text-primary mb-6">
        Your Todos <span className="text-primary">({todos.length})</span>
      </h2>

      <div className="space-y-4">
        {todos.map((todo) => (
          <div
            key={todo._id}
            className={`p-6 rounded-xl border-2 transition-all duration-300 ${
              todo.isActive
                ? 'bg-surface border-border hover:border-primary/50 hover:bg-surface/80'
                : 'bg-surface/50 border-border opacity-75'
            } ${loadingId === todo._id ? 'opacity-60' : 'opacity-100'}`}
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                        todo.isActive ? 'bg-primary' : 'bg-border'
                      }`}
                    ></div>
                    <div>
                      <h3
                        className={`text-xl font-semibold ${
                          todo.isActive
                            ? 'text-text-primary'
                            : 'text-text-secondary line-through'
                        }`}
                      >
                        {todo.title}
                      </h3>
                      <p
                        className={`mt-2 ${
                          todo.isActive
                            ? 'text-text-secondary'
                            : 'text-text-secondary/70'
                        }`}
                      >
                        {todo.description}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(
                      todo.category
                    )}`}
                  >
                    {todo.category}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
                  {todo.file && (
                    <a
                      href={`${import.meta.env.VITE_API_BASE_URL?.replace(
                        '/api/v1',
                        ''
                      )}${todo.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-200 text-sm"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                        />
                      </svg>
                      View Attachment
                    </a>
                  )}

                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-text-secondary">Status:</span>
                    <span
                      className={`font-semibold ${
                        todo.isActive ? 'text-primary' : 'text-yellow-400'
                      }`}
                    >
                      {todo.isActive ? 'Active' : 'Completed'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-2 lg:gap-3 flex-shrink-0">
                <button
                  onClick={() => handleToggleStatus(todo)}
                  disabled={loadingId === todo._id}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                    todo.isActive
                      ? 'bg-primary hover:bg-primary/90 text-white'
                      : 'bg-yellow-500 hover:bg-yellow-600 text-white'
                  } ${
                    loadingId === todo._id
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:scale-105'
                  }`}
                >
                  {loadingId === todo._id ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : todo.isActive ? (
                    <>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Complete
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      Reactivate
                    </>
                  )}
                </button>

                <button
                  onClick={() => handleDelete(todo._id)}
                  disabled={loadingId === todo._id}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
