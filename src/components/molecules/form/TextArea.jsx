const TextArea = ({name, placeholder, rows, cols, defaultValue, required = false}) => {
  return (
    <div className="py-2">
      <textarea
        className="rounded-md border px-4 py-1"
        name={name}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default TextArea;
