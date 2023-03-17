const Select = ({ name, categories, defaultValue }) => {
  const toUpper = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  };

  return (
    <div className="py-2">
      <select name={name} defaultValue={defaultValue} className="rounded-md border px-4 py-1">
        <option value="">Categorías</option>
        {categories.map((el) => {
          return <option value={el}>{toUpper(el)}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
