import Auth from "../layouts/Auth";
import Register from "../fragments/Register";

const RegisterPage = () => {
  return (
    <Auth title="Join Us 🔥" status="Register">
      <Register />
    </Auth>
  );
};

export default RegisterPage;
