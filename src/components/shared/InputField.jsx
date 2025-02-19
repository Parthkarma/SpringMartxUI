import React from "react";

const InputField = React.memo(({ label, id, type, placeholder, required, message, register, errors }) => {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                {...register(id, { 
                    required: required && { value: true, message: `${label} is required` },
                    ...(type === "password" && { 
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters long"
                        },
                        pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                            message: "Password must contain letters and at least one number"
                        }
                    })
                })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            
            {errors[id] && <p className="text-red-500 text-sm">{errors[id].message}</p>}
        </div>
    );
});

export default InputField;
