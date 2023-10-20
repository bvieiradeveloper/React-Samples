function Header({ title, registersCount }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", marginLeft: "10px" }}>
      <h1>{title}</h1>
      <span>{registersCount}</span>
    </div>
  );
}

export default Header;
