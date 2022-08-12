const Navbar = (props: any) => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span>React AT</span>
      </div>
      <div className="nav-items">
        {!props.logged ? (
          <div className="nav-item">
            <span>Login</span>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
