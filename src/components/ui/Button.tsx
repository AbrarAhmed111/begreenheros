import type { ButtonProps } from "../../types/models";

const variants = {
    green: "bg-green text-white",
    blue: "bg-blue text-white",
    black: "bg-black text-white",
    gradient:
        "bg-gradient-to-br from-gradient-blue to-gradient-green text-white",
    outline: "border border-dull-green text-dull-green bg-white",
};

export function Button({
    className = "",
    variant = "green",
    type = "button",
    ...props
}: ButtonProps) {
    return (
        <button
            type={type}
            className={`rounded-pill px-10 py-3 font-semibold transition duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green/30 ${variants[variant]} ${className}`}
            {...props}
        />
    );
}
