import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const SET_PROFILE = "SET-PROFILE";
const SET_STATUS = "SET-STATUS";
const UPLOAD_PHOTO = "UPLOAD-PHOTO";
const SEND_PROFILE = "SEND-PROFILE";
const TOGGLE_FETCHING = "TOGGLE-FETCHING";

let initialState = {
  profile: null,
  status: null,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case UPLOAD_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photo },
      };
    case TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: action.state,
      };
    default:
      return state;
  }
};

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const uploadPhotoSuccess = (photo) => ({
  type: UPLOAD_PHOTO,
  photo,
});

export const sendProfileSuccess = () => ({ type: SEND_PROFILE });

export const toggleIsFetchingSuccess = (state) => ({
  type: TOGGLE_FETCHING,
  state,
});

export const getProfile = (profileId) => async (dispatch) => {
  dispatch(toggleIsFetchingSuccess(true));
  let res = await profileAPI.getProfile(profileId);
  dispatch(setProfile(res));
  dispatch(toggleIsFetchingSuccess(false));
};

export const getUserStatus = (profileId) => async (dispatch) => {
  let res = await profileAPI.getStatus(profileId);
  dispatch(setStatus(res.data));
};

export const setUserStatus = (status) => async (dispatch) => {
  let res = await profileAPI.updateStatus(status);
  if (res.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const uploadPhoto = (photo) => async (dispatch) => {
  let res = await profileAPI.uploadPhoto(photo);
  if (res.data.resultCode === 0) {
    dispatch(uploadPhotoSuccess(res.data.data.photos));
  }
};

export const sendProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;

  let res = await profileAPI.sendProfile(profile);
  if (res.data.resultCode === 0) {
    dispatch(getProfile(userId));
  } else {
    dispatch(
      stopSubmit("edit-profile", {
        _error:
          res.data.messages.length > 0
            ? res.data.messages[0]
            : "Something went wrong. Try again",
      })
    );
    return Promise.reject(res.data.messages[0]);
  }
};

export default usersReducer;
