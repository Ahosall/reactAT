import { useState } from "react";

import { useAuth } from "./../../contexts/auth";

import "./style.css";

const Login = () => {
  const [message, setMessage] = useState("");

  const { Login } = useAuth();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const el = e.target.elements;
    const user = {
      email: el.email.value,
      password: el.password.value,
    };

    (async () => {
      let r = await Login(user);
      setMessage(r);
      setTimeout(() => setMessage(""), 10 * 1000);
    })();
  };

  return (
    <>
      {message !== "" ? <div className="notify">{message}</div> : null}
      <div className="login">
        <div className="card">
          <div className="card-header">
            <h2 className="login-title">Login</h2>
          </div>
          <div className="card-content">
            <form onSubmit={handleLogin} className="login-form">
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="E-Mail"
                autoFocus
                required
              />
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="Senha"
                required
              />
              <input className="form-submit" type="submit" value="Login" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
