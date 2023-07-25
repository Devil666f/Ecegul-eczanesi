import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Ecegül eczanesi
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/Contact">Contact us</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : "con"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
