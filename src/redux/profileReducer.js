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

export const getProfile = (profileId) => async (dispatch) => {
  let res = await profileAPI.getProfile(profileId);
  dispatch(setProfile(res));
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

export default usersReducer;
