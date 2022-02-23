import { useState } from "react";
import { Form } from "react-bootstrap";
import CustomeButton from "../CustomeButton";
import InputText from "../InputText";
import "./login.css"

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const clickBtn = (e) => {
      e.preventDefault()
    if (userName && password) {
      alert("UserName :-" + userName);
      setUserName("")
      setPassword("")
    }
  };

  return (
    <Form className="form-horizontal m-t-20">
      <InputText
        faIcon="fa fa-user-o"
        type="email"
        name="userName"
        placeholder="UserName"
        required={true}
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      <InputText
        faIcon="fa fa-pencil"
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required={true}
      />
      <div className="form-group row">
        <div className="col-md-12">
          <div className="custom-control custom-checkbox d-flex">
            <input
              type="checkbox"
              id="customCheck1"
              className="custom-control-input"
            />
            <label className="custom-control-label font-14">
              Remember me
            </label>
            <a href="#" id="to-recover" className="text-dark font-14 ml-auto">
              <i className="fa fa-lock forgot-icon"></i> Forgot pwd?
            </a>
          </div>
        </div>
      </div>
      <div className="form-group text-center">
        <div className="col-xs-12 p-b-20">
          <CustomeButton
            type="submit"
            className="btn btn-block btn-lg login-btn"
            variant="primary"
            content="Log In"
            onClick={clickBtn}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
          <div className="social">
            <a href="#" className="btn btn-facebook mr-2">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="btn btn-googleplus">
              <i className="fa fa-google-plus"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="form-group mb-0 mt-10">
        <div className="col-sm-12 text-center">
          Don't have an account?{" "}
          <a href="#" className="text-info ml-5">
            <b>Sign Up</b>
          </a>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;
