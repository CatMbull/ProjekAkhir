import { useState } from "react";
import IndexInput from "../elements/Input/IndexInput";
import Button from "../elements/Button/Button";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Register = () => {
  const [activePassword, setActivePassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  const registerHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', {username, email, password})
    .then(result => {console.log(result)
    navigate("/login");
    console.log("username");
  })
  .catch(err=> console.log(err))
    } 

  return (
    <div className="w-4/6 h-4/6">
      <div className="m-2">
        <form onSubmit={registerHandler}>
          <IndexInput type="text" htmlFor="name" placeholder="Name" name="name" className="bg-transparent border-2 border-sky-300 text-white" value={username} onChange={(e) => setUsername(e.target.value)}>
            Name
          </IndexInput>

          <IndexInput type="email" htmlFor="email" placeholder="example@gmail.com" name="email" className="bg-transparent border-2 border-sky-300 text-white" onChange={(e) => setEmail(e.target.value)} value={email}>
            Email
          </IndexInput>

          <div className="relative">
            <IndexInput
              type={activePassword ? "text" : "password"}
              htmlFor="password"
              placeholder="****"
              name="password"
              className="bg-transparent border-2 border-sky-300 text-white"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            >
              Password
              <div className="absolute right-4 bottom-3 cursor-pointer">{activePassword ? <BsEyeSlashFill onClick={() => setActivePassword(false)} /> : <BsEyeFill onClick={() => setActivePassword(true)} />}</div>
            </IndexInput>
          </div>

          <Button type="submit" className="font-bold mt-5 h-10 bg-red-600 rounded">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
