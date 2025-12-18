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
    const baseClasses = "items-center gap-2 bg-[#a6ff48] text-[#053d3d] rounded-full hover:bg-white transition-colors duration-300";
    const variantClasses = variant === 'large' ? 'py-4 px-6' : 'py-3 px-6';
    const displayClasses = className.includes('hidden') || className.includes('flex') ? '' : 'inline-flex';
    
    return (
        <a
            href="https://tidycal.com/gluckjamin/free-gatherup-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className={`${displayClasses} ${baseClasses} ${variantClasses} ${className}`}
            style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '700'
            }}
            onClick={onClick}
        >
            Book a Demo
            {showIcon && (
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={4} 
                    stroke="currentColor" 
                    className="w-4 h-4"
                >
                    
                    <path  d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            )}
        </a>
    );
};
