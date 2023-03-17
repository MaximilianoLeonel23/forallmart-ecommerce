const Input = ({type, name, placeholder, defaultValue, required = false, id}) => {
  return (
    <div className="py-2">
      <input
        className="w-full rounded-md border px-4 py-1 focus:outline-none"
        type={type}
        name={name}
        id={id}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
