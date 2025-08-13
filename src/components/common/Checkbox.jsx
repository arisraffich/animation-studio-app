import { Check } from './Icons';

export const Checkbox = ({ 
  checked = false, 
  onChange, 
  disabled = false,
  className = "",
  size = "md" 
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };

  const checkSizes = {
    sm: 12,
    md: 16,
    lg: 20
  };

  return (
    <button
      type="button"
      onClick={onChange}
      disabled={disabled}
      className={`
        relative flex items-center justify-center rounded border-2 transition-all duration-200
        ${checked 
          ? 'bg-blue-600 border-blue-600 text-white' 
          : 'bg-gray-800 border-gray-600 hover:border-gray-500'
        }
        ${disabled 
          ? 'opacity-50 cursor-not-allowed' 
          : 'cursor-pointer hover:scale-105'
        }
        ${sizeClasses[size]}
        ${className}
      `}
    >
      <div className={`
        transition-all duration-200 flex items-center justify-center
        ${checked 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-75'
        }
      `}>
        <Check size={checkSizes[size]} className="text-white" />
      </div>
    </button>
  );
};