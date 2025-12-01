import { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Other',
    isActive: true,
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const categories = ['Work', 'Personal', 'Shopping', 'Health', 'Other'];

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setError(null);

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const onFileChange = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setFile(null);
      return;
    }

    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      return;
    }

    setFile(selectedFile);
    setError(null);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      setError('Title is required');
      return;
    }
    if (!formData.description.trim()) {
      setError('Description is required');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const submitData = new FormData();

      submitData.append('title', formData.title);
      submitData.append('description', formData.description);
      submitData.append('category', formData.category);
      submitData.append('isActive', formData.isActive.toString());

      if (file) {
        submitData.append('attachment', file);
      }

      await onAdd(submitData);
      setFormData({
        title: '',
        description: '',
        category: 'Other',
        isActive: true,
      });
      setFile(null);
      const fileInput = document.getElementById('file');
      if (fileInput) fileInput.value = '';
    } catch (error) {
      console.error('Error adding todo:', error);
      setError(error.response?.data?.message || 'Failed to add todo');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface rounded-xl p-6 border border-border mb-8">
      <h2 className="text-2xl font-semibold text-text-primary mb-6">
        Add New Todo
      </h2>

      {error && (
        <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg mb-6">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {error}
          </div>
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-text-primary mb-2"
          >
            Title <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={onChange}
            disabled={loading}
            placeholder="Enter todo title"
            className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text-primary placeholder-text-secondary transition-all duration-300 disabled:opacity-50"
            required
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-text-primary mb-2"
          >
            Description <span className="text-red-400">*</span>
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={onChange}
            disabled={loading}
            placeholder="Enter todo description"
            rows="4"
            className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text-primary placeholder-text-secondary transition-all duration-300 resize-none disabled:opacity-50"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="relative">
    <label htmlFor="category" className="block text-sm font-medium text-text-primary mb-2">
      Category
    </label>
    <div className="relative">
      <select
        name="category"
        id="category"
        value={formData.category}
        onChange={onChange}
        disabled={loading}
        className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text-primary transition-all duration-300 disabled:opacity-50 appearance-none cursor-pointer z-30"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat} className="bg-surface text-text-primary py-2">
            {cat}
          </option>
        ))}
      </select>
      {/* Custom dropdown arrow */}
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none z-40">
        <svg className="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>

  <div>
    <label htmlFor="file" className="block text-sm font-medium text-text-primary mb-2">
      Attachment (Optional)
    </label>
    <input
      type="file"
      name="file"
      id="file"
      onChange={onFileChange}
      disabled={loading}
      accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.txt"
      className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text-primary file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90 transition-all duration-300 disabled:opacity-50"
    />
    {file && (
      <div className="mt-2 text-sm text-primary flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Selected: {file.name} ({(file.size / 1024).toFixed(2)} KB)
      </div>
    )}
  </div>
</div>

        <div className="flex items-center gap-3 p-4 bg-surface/50 rounded-lg border border-border">
          <div className="relative">
            <input
              name="isActive"
              type="checkbox"
              id="isActive"
              checked={formData.isActive}
              onChange={onChange}
              disabled={loading}
              className="sr-only"
            />
            <div
              className={`w-6 h-6 rounded border-2 transition-all duration-300 flex items-center justify-center ${
                formData.isActive
                  ? 'bg-primary border-primary'
                  : 'bg-surface border-border'
              }`}
            >
              {formData.isActive && (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
          </div>
          <label
            htmlFor="isActive"
            className="text-text-primary font-medium cursor-pointer"
          >
            Mark as Active
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Adding Todo...
            </>
          ) : (
            <>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Add Todo
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
