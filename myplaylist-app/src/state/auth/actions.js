import * as api from "api/rest";

export const LOGIN = "LOGIN";

export const storeUser = (loginData) => ({
  type: LOGIN,
  payload: loginData,
});

export const login = (username, password) => {
  return async (dispatch) => {
    const response = await api.login(username, password);
    dispatch(storeUser(response));
  };
};
