import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import IndexInput from "../elements/Input/IndexInput";
import Button from "../elements/Button/Button";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [activePassword, setActivePassword] = useState(false);
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()  
  const navigate = useNavigate()

  const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(result => {
            console.log(result)
            if(result.data === "Succsess"){
                navigate('/home')
            }
        })
        .catch(err=> console.log(err))
    }
  return (
    <div className="w-4/6 h-4/6">
      <div className="m-2">
        <form onSubmit={handleSubmit}>
          <IndexInput 
          type="text" 
          htmlFor="name" 
          placeholder="Username or password" 
          name="name" 
          id="name" 
          className="bg-transparent border-2 border-sky-300 text-white"
          onChange={(e) => setEmail(e.target.value)}
          value = {email}
          >
            Username or Email
          </IndexInput>

          <div className="relative">
            <IndexInput 
            type={activePassword ? "text" : "password"} 
            htmlFor="password" 
            placeholder="****" 
            name="password" 
            id="password" 
            className="bg-transparent border-2 border-sky-300 text-white"
            onChange={(e) => setPassword(e.target.value)}
            value = {password}
            >
              Password
              <div className="absolute right-4 bottom-3 cursor-pointer">{activePassword ? <BsEyeSlashFill onClick={() => setActivePassword(false)} /> : <BsEyeFill onClick={() => setActivePassword(true)} />}</div>
            </IndexInput>
          </div>

          <Button className="font-bold mt-3 h-10 bg-red-600 rounded">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
