import { useAuth } from "./../../contexts/auth";

const Login = () => {
  const { Login } = useAuth();

  const handleLogin = (e: any) => {
    e.preventDefault();
    const el = e.target.elements;
    const user = {
      email: el.email.value,
      password: el.password.value,
    };

    Login(user);
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" name="email" placeholder="E-Mail" />
      <input type="password" name="password" placeholder="Senha" />
      <input type="submit" value="Login" />
    </form>
  );
};

export default Login;
