import Label from "./Label";
import Input from "./Input";

const IndexInput = (prop) => {
  const { children, htmlFor, type, placeholder, name, className, onChange, value } = prop;
  return (
    <div className="flex flex-col">
      <Label htmlFor={htmlFor}>{children}</Label>
      <Input type={type} placeholder={placeholder} name={name} id={name} className={className} onChange={onChange} value={value} />
    </div>
  );
};

export default IndexInput;
