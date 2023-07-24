const Button = (prop) => {
  const { onClick, type ,className, children } = prop;
  return (
    <button type={type} className={`w-full font-bold text-white ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
