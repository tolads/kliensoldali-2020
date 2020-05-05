import { LOGIN } from "./actions";

const initialState = {};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === LOGIN) {
    return payload;
  }

  return state;
};
