import styles from './NavBar.module.scss';
import logo from '../../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faLock,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className={styles.root + ' px-3 py-2'}>
    <div className={styles.box + ' d-flex justify-content-between'}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className={styles.links}>
        <Link to="/login">
          <FontAwesomeIcon className={styles.icon} icon={faUser} />
          <span className={styles.text}>Login</span>
        </Link>
        <Link to="/register">
          <FontAwesomeIcon className={styles.icon} icon={faLock} />
          <span className={styles.text}>Register</span>
        </Link>
        <Link to="/cart">
          <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
        </Link>
      </div>
    </div>
  </div>
);

export default NavBar;
