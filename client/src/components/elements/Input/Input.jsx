const Input = (prop) => {
  const { placeholder, name, className, type, onChange, defaultValue, value } = prop;
  return <input type={type} placeholder={placeholder} name={name} id={name} value={value} className={`w-full h-10 mt-2 pl-2 focus:outline-none ${className}`} onChange={onChange} defaultValue={defaultValue} autoComplete="off" />;
};

export default Input;
