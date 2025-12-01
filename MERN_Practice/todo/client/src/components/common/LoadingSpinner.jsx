const LoadingSpinner = ({ size = 'medium', message = 'Loading...' }) => {
  const sizes = {
    small: 'w-6 h-6',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div
        className={`${sizes[size]} border-4 border-primary border-t-transparent rounded-full animate-spin mb-4`}
      ></div>
      <p className="text-text-secondary text-center">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
