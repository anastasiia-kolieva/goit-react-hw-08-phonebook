import { useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Container from './components/Container/Container';
import AppBar from './components/Appbar/Appbar';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import ContactsView from './views/ContactsView';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';

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
          <Loader type="Hearts" color="#f842da" height={80} width={80} />
        }
      >
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
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
