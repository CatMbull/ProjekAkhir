import { Link } from "react-router-dom";

const Auth = (prop) => {
  const { children, title, status } = prop;
  return (
    <div className=" wrapper h-screen flex items-center justify-center">
      <div className="hidden">{status}</div>
      <div className="w-full h-full ">
        <div className="bg-slate-900 h-full w-3/4 flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl font-bold ">{title}</h1>
          <p className="text-white mt-1">Please Introducing Your Self</p>
          {children}
          <p className="text-white ">
            {status !== "Register" ? "Don't have an account?" : "Already have an account?"}{" "}
            <Link to={status === "Register" ? "/login" : "/register"} className="text-orange-300 underline hover:font-bold ">
              {status !== "Register" ? "Register" : "Login"}
            </Link>
          </p>
        </div>
      </div>
      <div className="h-full w-3/4 "></div>
    </div>
  );
};

export default Auth;
