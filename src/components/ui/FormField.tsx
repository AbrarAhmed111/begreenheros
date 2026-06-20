import type { FormFieldProps } from "../../types/models";

export function FormField({
    label,
    name,
    type = "text",
    placeholder,
    required,
}: FormFieldProps) {
    return (
        <label className="block font-semibold text-body">
            {label}
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                className="mt-1 w-full rounded-xl border border-gray-300 bg-white p-3 font-normal outline-none transition focus:border-green focus:ring-4 focus:ring-green/10"
            />
        </label>
    );
}
