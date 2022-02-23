import Logo from "../../assets/logo-icon.png";
import LoginForm from "./LoginForm";
import "./login.css"

const Login = () => {
  return (
    <div className="auth-box m-3 m-md-0">
      <div className="logo">
        <span className="db">
          <img src={Logo} alt="logo" />
        </span>
        <h5 className="font-medium mb-20">Sign In to Admin</h5>
      </div>
      <div className="row">
        <div className="col-12">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
