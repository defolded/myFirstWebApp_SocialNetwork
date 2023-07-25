import { profileAPI } from "../api/api";

const SET_PROFILE = "SET-PROFILE";
const SET_STATUS = "SET-STATUS";
const UPLOAD_PHOTO = "UPLOAD-PHOTO";

let initialState = {
  profile: null,
  status: null,
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

export const getProfile = (profileId) => {
  return (dispatch) => {
    profileAPI.getProfile(profileId).then((res) => {
      dispatch(setProfile(res));
    });
  };
};

export const getUserStatus = (profileId) => {
  return (dispatch) => {
    profileAPI.getStatus(profileId).then((res) => {
      dispatch(setStatus(res.data));
    });
  };
};

export const setUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export const uploadPhoto = (photo) => {
  return (dispatch) => {
    profileAPI.uploadPhoto(photo).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(uploadPhotoSuccess(res.data.data.photos));
      }
    });
  };
};

export default usersReducer;
