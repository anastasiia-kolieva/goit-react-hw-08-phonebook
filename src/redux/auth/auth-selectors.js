const getisAthenticated = state => Boolean(state.auth.token);

const getToken = state => state.auth.token;
// в AppBar поменять
const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

export default {
  getisAthenticated,
  getToken,
  getIsLoggedIn,
  getUsername,
};
