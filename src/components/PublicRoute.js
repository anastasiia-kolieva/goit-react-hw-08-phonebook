import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';

/**
 * - Если маршрут ограниченный, и юзер залогинен, рендерит редирект на redirectTo
 * - В противном случае рендерит компонент
 *
 */

export default function PublicRoute({
  component: Component,
  redirectTo,
  ...routeProps
}) {
  const isAuthenticated = useSelector(authSelectors.getisAthenticated);
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
