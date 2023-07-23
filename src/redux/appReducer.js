import { getAuthUserData } from "./authReducer";

const SET_INIT = "SET-INIT";

let initialState = {
  init: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INIT:
      return {
        ...state,
        init: true,
      };
    default:
      return state;
  }
};

export const initSuccess = () => ({ type: SET_INIT });

export const initializeApp = () => (dispatch) => {
  dispatch(getAuthUserData()).then(() => dispatch(initSuccess()));
};

export default appReducer;
