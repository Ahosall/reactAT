import { HiOutlineLogout } from "react-icons/hi";

import { useAuth } from "../contexts/auth";

import "./Navbar.css";

const Navbar = (props: any) => {
  const { Logout } = useAuth();

  const handleLogout = () => {
    Logout();
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <a href="/">Site</a>
      </div>
      <div className="nav-items">
        <div className="nav-item" style={{ float: "right" }}>
          <a href="/profile" style={{ fontWeight: "bold" }}>
            {props.user.login}
          </a>
          {" | "}
          <a href="/" onClick={handleLogout}>
            <HiOutlineLogout />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
