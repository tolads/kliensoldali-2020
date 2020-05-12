export const getIsLoggedIn = (state) => !!state.auth.accessToken;
export const getAuthToken = (state) => state.auth.accessToken;
