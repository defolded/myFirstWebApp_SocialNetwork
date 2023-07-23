import { stopSubmit } from "redux-form";
import { authAPI, profileAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";
const SET_PROFILE_PICTURE = "SET-PROFILE-PICTURE";

let initialState = {
  userId: null,
  email: null,
  login: null,
  imageSmall: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case SET_PROFILE_PICTURE:
      return {
        ...state,
        ...action.image,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const setProfilePicture = (image) => ({
  type: SET_PROFILE_PICTURE,
  image,
});

export const getAuthUserData = () => (dispatch) => {
  return authAPI.getAuthUserData().then((res) => {
    if (res.resultCode === 0) {
      let { id, login, email } = res.data;
      profileAPI.getProfile(id).then((res) => {
        dispatch(setProfilePicture(res.photos.small));
      });
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      dispatch(
        stopSubmit("login", {
          _error:
            res.data.messages.length > 0
              ? res.data.messages[0]
              : "Something went wrong. Try again",
        })
      );
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

export default authReducer;
