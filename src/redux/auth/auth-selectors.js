const getisAthenticated = state => state.auth.isAthenticated;

const getToken = state => state.auth.token;

const getUsername = state => state.auth.user.name;

const authSelectors = {
  getisAthenticated,
  getToken,
  getUsername,
};

export default authSelectors;
