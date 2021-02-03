import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';

/**
 * 1. Он должен повторять API Route
 *  2. Он должен рендерить Route
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на redirectTo
 */

export default function PrivateRoute({
  // children,
  component: Component,
  //   isAuthenticated,
  redirectTo,
  ...routeProps
}) {
  //   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isAuthenticated = useSelector(authSelectors.getisAthenticated);
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
      // {/* {isAuthenticated ? children : <Redirect to={redirectTo} />} */}
    />
  );
}
