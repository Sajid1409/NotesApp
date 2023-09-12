const Header = ({ toggle, setToggle }) => {
  return (
    <div className="header">
      <h2>NOTES</h2>
      <button className="toggle" onClick={() => setToggle(!toggle)}>
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
