import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Container from './components/Container/Container';
import AppBar from './components/Appbar/Appbar';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import s from './App.module.css';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense
        fallback={
          <Loader
            type="Hearts"
            color="#0cac4e"
            height={60}
            width={60}
            className={s.loader}
          />
        }
      >
        <Switch>
          <Route exact path="/" component={HomeView} />
          <PublicRoute
            path="/register"
            component={RegisterView}
            redirectTo="/contacts"
            restricted
          />
          <PublicRoute
            path="/login"
            component={LoginView}
            redirectTo="/contacts"
            restricted
          />
          <PrivateRoute
            path="/contacts"
            component={ContactsView}
            redirectTo="/login"
          />
        </Switch>
      </Suspense>
    </Container>
  );
}
