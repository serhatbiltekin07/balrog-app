import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-log">Balrog</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <button className="nav-contact">
          <li>Contact</li>
        </button>
      </ul>
    </div>
  );
}

export default Navbar;
