const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-surface border border-border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-surface/80 transition-colors duration-200 text-text-primary"
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-lg transition-all duration-200 border ${
            currentPage === page
              ? 'bg-primary text-white border-primary'
              : 'bg-surface text-text-secondary border-border hover:bg-surface/80 hover:text-text-primary'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-surface border border-border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-surface/80 transition-colors duration-200 text-text-primary"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
