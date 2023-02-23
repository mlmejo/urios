import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
  {
    type = "text",
    name,
    id,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
    placeHolder,
  },
  ref
) {
  const input = ref ? ref : useRef();

  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);

  return (
    <div className="flex flex-col items-start">
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        className={
          `min-w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ` +
          className
        }
        ref={input}
        placeholder={placeHolder}
        autoComplete={autoComplete}
        required={required}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
});
