import { stopSubmit } from "redux-form";
import { authAPI, profileAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";
const GET_CAPTCHA_URL = "GET-CAPTCHA-URL";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case GET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.url,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const getCaptchaUrlSuccess = (url) => ({ type: GET_CAPTCHA_URL, url });

export const getAuthUserData = () => async (dispatch) => {
  let res = await authAPI.getAuthUserData();
  if (res.resultCode === 0) {
    let { id, login, email } = res.data;
    res = await profileAPI.getProfile(id);
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login =
  (email, password, rememberMe, captcha) => async (dispatch) => {
    let res = await authAPI.login(email, password, rememberMe, captcha);
    if (res.data.resultCode === 0) {
      dispatch(getAuthUserData());
      dispatch(getCaptchaUrlSuccess(null));
    } else {
      if (res.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      dispatch(
        stopSubmit("login", {
          _error:
            res.data.messages.length > 0
              ? res.data.messages[0]
              : "Something went wrong. Try again",
        })
      );
    }
  };

export const getCaptchaUrl = () => async (dispatch) => {
  let res = await securityAPI.getCaptcha();
  dispatch(getCaptchaUrlSuccess(res.data.url));
};

export const logout = () => async (dispatch) => {
  let res = await authAPI.logout();
  if (res.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
