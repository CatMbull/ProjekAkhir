const Label = (prop) => {
  const { children, htmlFor } = prop;
  return (
    <label htmlFor={htmlFor} className="text-white font-bold mt-4 mb-2">
      {children}
    </label>
  );
};

export default Label;
