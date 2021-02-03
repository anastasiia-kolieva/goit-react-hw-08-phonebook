import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';

/**
 * - Если маршрут ограниченный, и юзер залогинен, рендерит редирект на redirectTo
 * - В противном случае рендерит компонент
 *
 */

export default function PublicRoute({
  // children,
  component: Component,
  // restricted = false,
  redirectTo,
  ...routeProps
}) {
  const isAuthenticated = useSelector(authSelectors.getisAthenticated);
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isAuthenticated && routeProps.restricted;
  return (
    <Route
      {...routeProps}
      render={props =>
        shouldRedirect ? <Redirect to={redirectTo} /> : <Component {...props} />
      }
    />
  );
}
