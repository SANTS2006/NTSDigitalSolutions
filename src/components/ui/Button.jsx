function Button({
    children,
    variant = "primary",
    onClick,
    disabled
}) {


    const styles = {

        primary:
        "bg-blue-600 text-white hover:bg-blue-700",

        secondary:
        "border border-blue-600 text-blue-600 hover:bg-blue-50"

    };


    return (

        <button

            onClick={onClick}

            disabled={disabled}

            className={`
                px-6
                py-3
                rounded-lg
                font-semibold
                transition
                ${styles[variant]}
                ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            `}

        >

            {children}

        </button>

    );

}


export default Button;