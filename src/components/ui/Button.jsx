function Button({ children, variant = "primary", onClick}){
    const styles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "border border-blue-600 text-blue-600 hover:bg-blue-50",
        white: "bg-white text-blue-600"
    }

    return (
        <button onClick={onClick} className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${styles[variant]}`}>
               {children} 
        </button>
    );
};

export default Button;