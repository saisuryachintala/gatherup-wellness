import React from 'react';

interface BookDemoButtonProps {
    variant?: 'default' | 'large';
    className?: string;
    showIcon?: boolean;
    onClick?: () => void;
}

export const BookDemoButton: React.FC<BookDemoButtonProps> = ({ 
    variant = 'default',
    className = '',
    showIcon = true,
    onClick
}) => {
    const baseClasses = "inline-flex items-center gap-2 bg-[#a6ff48] text-[#053d3d] font-bold rounded-full hover:bg-white transition-colors duration-300";
    const variantClasses = variant === 'large' ? 'py-3 px-5 text-base' : 'py-2 px-4 text-sm';
    
    return (
        <a
            href="https://tidycal.com/gluckjamin/free-gatherup-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseClasses} ${variantClasses} ${className}`}
            onClick={onClick}
        >
            Book a Demo
            {showIcon && (
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2.5} 
                    stroke="currentColor" 
                    className="w-4 h-4"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            )}
        </a>
    );
};
