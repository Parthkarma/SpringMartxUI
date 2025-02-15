const InputField = ({
  label,
  id,
  type,
  errors,
  register,
  required,
  message,
  className,
  min,
  value,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label
        htmlFor={id}
        className={`${className ? className : ""} font-semibold text-sm text-slate-800`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`${className ? className : ""} px-2 py-2 border outline-none bg-transparent text-slate-800 rounded-md ${
          errors[id]?.message ? "border-red-500" : "border-slate-700"
        }`}
        {...register(id, {
          required: required ? { value: required, message } : false,
          minLength: min ? { value: min, message: `Minimum ${min} characters required` } : undefined,
          pattern:
            type === "email"
              ? {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email",
                }
              : type === "url"
              ? {
                  value: /^(https?:\/\/)?([a-zA-Z0-9\u00a1-\uffff.-]+)(:\d{2,5})?(\/[^\s]*)?$/,
                  message: "Please enter a valid URL",
                }
              : undefined,
        })}
      />
      {errors[id]?.message && <p className="tex-sm font-semihold text-red-600 mt-0">{errors[id]?.message}</p>}
    </div>
  );
};

