import Auth from "../layouts/Auth";
import Login from "../fragments/Login";

const LoginPage = () => {
  return (
    <Auth title="Welcome Back" status="Login">
      <Login />
    </Auth>
  );
};

export default LoginPage;
