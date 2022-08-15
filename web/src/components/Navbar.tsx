const Navbar = (props: any) => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span>React AT</span>
      </div>
      <div className="nav-items">
        <div className="nav-item">
          <span>{props.user.name}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
