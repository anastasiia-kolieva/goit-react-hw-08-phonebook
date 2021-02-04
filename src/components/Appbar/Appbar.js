import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import authSelectors from '../../redux/auth/auth-selectors';
import s from './Appbar.module.css';

export default function Appbar() {
  const isAthenticated = useSelector(authSelectors.getisAthenticated);
  return (
    <AppBar position="static" color="secondary">
      <header className={s.header}>
        <Navigation />
        {isAthenticated ? <UserMenu /> : <AuthNav />}
      </header>
    </AppBar>
  );
}
