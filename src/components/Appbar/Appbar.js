import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import authSelectors from '../../redux/auth/auth-selectors';
import s from './Appbar.module.css';

// принимает проп isAuthenticated
export default function Appbar() {
  // поменять на getIsLoggedIn
  const isAthenticated = useSelector(authSelectors.getisAthenticated);
  return (
    <header className={s.header}>
      <Navigation />
      {isAthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
