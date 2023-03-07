const Input = ({type, name, placeholder, defaultValue, required = false}) => {
  return (
    <div className="py-2">
      <input
        className="rounded-md border px-4 py-1"
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
