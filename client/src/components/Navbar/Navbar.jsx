import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const backgroundAll = "#007d8c";
  const backgroundClick = "#97d6e3";
  const textColor = "#fff";
  const textColorClick = "#000";
  const navigate = useNavigate();
  const location = useLocation();

  const backgroundIcon = (el) => {
    if (el === location.pathname) {
      return true;
    }
  };

  return (
    <header
      className="nav-bar-all"
      style={{
        background: backgroundAll,
      }}
    >
      <nav>
        <ul className="nav-bar-ul">
          <li
            className="nav-bar-li"
            onClick={() => navigate("/")}
            style={{
              background: backgroundIcon("/") ? backgroundClick : backgroundAll,
              color: backgroundIcon("/") ? textColorClick : textColor,
            }}
          >
            <h3 className="nav-bar-text">Home</h3>
          </li>
          <li
            className="nav-bar-li"
            onClick={() => navigate("/search")}
            style={{
              background: backgroundIcon("/search")
                ? backgroundClick
                : backgroundAll,
              color: backgroundIcon("/search") ? textColorClick : textColor,
            }}
          >
            <h3 className="nav-bar-text">Search</h3>
          </li>
          <li
            className="nav-bar-li"
            onClick={() => navigate("/song")}
            style={{
              background: backgroundIcon("/song")
                ? backgroundClick
                : backgroundAll,
              color: backgroundIcon("/song") ? textColorClick : textColor,
            }}
          >
            <h3 className="nav-bar-text">Song</h3>
          </li>
          <li
            className="nav-bar-li"
            onClick={() => navigate("/songlist")}
            style={{
              background: backgroundIcon("/songlist")
                ? backgroundClick
                : backgroundAll,
              color: backgroundIcon("/songlist") ? textColorClick : textColor,
            }}
          >
            <h3 className="nav-bar-text">Song-List</h3>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
