import { useNavigate } from "react-router-dom";
import Button from "../elements/Button/Button";

const ErrorPage = () => {
  const navigate = useNavigate();
  const backButton = () => {
    navigate("/");
  }
  return (
    <div className="h-screen bg-slate-950 flex">
      <div className="w-3/4 h-full w-full flex items-center justify-center">
        <div className="h-4/6 w-4/6  flex  items-center">
          <div>
            <h1 className="font-bold text-9xl text-sky-300">404</h1>
            <div className="h-3 w-full bg-sky-700 rounded mt-4"></div>
            <h2 className="text-slate-100 font-bold text-3xl mt-5">Page Not Found</h2>
            <p className="text-slate-200 mt-3 text-xl">We Cannot find the page you are looking for 😭</p>
            <Button to="/" className="mt-5 h-10 w-32 bg-orange-500 text-slate-100  text-xl rounded-md" onClick={backButton}>
              Go Back
            </Button>
          </div>
        </div>
      </div>
      <div className="w-3/4 h-full flex items-center justify-center">
        <img src="/images/404.png" alt="errorImg" />
      </div>
    </div>
  );
};

export default ErrorPage;
