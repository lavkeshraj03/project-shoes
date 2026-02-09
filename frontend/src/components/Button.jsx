const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
    const baseStyle = "px-6 py-3 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-black text-white hover:bg-gray-800 focus:ring-black",
        secondary: "bg-white text-black border border-gray-200 hover:bg-gray-50 focus:ring-gray-200",
        outline: "bg-transparent text-black border border-black hover:bg-black hover:text-white focus:ring-black"
    };

    return (
        <button
            className={`${baseStyle} ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
