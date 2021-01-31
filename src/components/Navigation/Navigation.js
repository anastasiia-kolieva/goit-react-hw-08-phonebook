import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Home Page
      </NavLink>
      <NavLink to="/contacts" className={s.link} activeClassName={s.activeLink}>
        Phonebook
      </NavLink>
    </>
  );
}
