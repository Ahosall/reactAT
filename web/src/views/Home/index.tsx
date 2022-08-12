import { useAuth } from "../../contexts/auth";

const Home = () => {
  const { Logout } = useAuth();

  const handleLogout = () => {
    Logout();
  };

  return (
    <>
      <h1>Hello, World!</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Home;
