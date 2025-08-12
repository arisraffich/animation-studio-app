export const Button = ({ onClick, children, disabled = false, className = '', variant = 'primary' }) => {
  const baseClasses = 'flex items-center justify-center gap-2 px-4 py-2 font-semibold rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900';
  const variants = {
    primary: 'text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-500',
    secondary: 'text-gray-200 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-500',
    danger: 'text-white bg-red-600 hover:bg-red-700 disabled:bg-red-400',
    warning: 'bg-yellow-600/20 hover:bg-yellow-600/40 text-yellow-300'
  };
  return (
    <button onClick={onClick} disabled={disabled} className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};