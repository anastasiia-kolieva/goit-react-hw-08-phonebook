import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import s from './Appbar.module.css';

// принимает проп isAuthenticated
export default function Appbar({ isAuthenticated }) {
  return (
    <header className={s.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
