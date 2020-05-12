export const getIsLoggedIn = (state) => !!state.auth.accessToken;
export const getAuthToken = (state) => state.auth.accessToken;
export const getUserId = (state) => state.auth.user.id;
