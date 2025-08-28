import React from "react";

interface ButtonProps {
    title: string;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ title, className, onClick }: ButtonProps) {
    return (
        <button
            className={`mt-6 px-5 py-2 bg-[#327D7D] cursor-pointer text-white rounded-lg shadow-md hover:bg-teal-600 transition   ${className}`}
            onClick={onClick}
        >
            {title}
        </button>
    );
}

export default Button;
