import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <Link className="nav-link" to="/">
          <li>Inicio</li>
        </Link>
        <Link className="nav-link" to="/eventos">
          <li>Eventos</li>
        </Link>
        <Link className="nav-link" to="/faq">
          <li>FAQ</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
