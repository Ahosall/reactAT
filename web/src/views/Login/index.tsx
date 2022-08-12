import { useContext } from "react";
import AuthContext from "./../../contexts/auth";

const Login = () => {
  const context = useContext(AuthContext);

  const handleLogin = () => {
    context.Login();
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
