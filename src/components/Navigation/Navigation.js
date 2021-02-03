import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
import s from './Navigation.module.css';

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getisAthenticated);
  return (
    <>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Home Page
      </NavLink>

      {isAuthenticated && (
        <NavLink
          to="/contacts"
          className={s.link}
          activeClassName={s.activeLink}
        >
          Phonebook
        </NavLink>
      )}
    </>
  );
}
