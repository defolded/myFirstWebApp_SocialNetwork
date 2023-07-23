import { profileAPI, usersAPI } from "../api/api";

const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_ISFETCHING = "TOGGLE-ISFETCHING";

const SET_PROFILE = "SET-PROFILE";
const SET_STATUS = "SET-STATUS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  profile: null,
  status: null,
  isFetching: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        users: state.users.map((m) => {
          if (m.id === action.userId) {
            return { ...m, isFollowed: true };
          }
          return m;
        }),
      };
    case UNFOLLOW_USER:
      return {
        ...state,
        users: state.users.map((m) => {
          if (m.id === action.userId) {
            return { ...m, isFollowed: false };
          }
          return m;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.usersCount,
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case TOGGLE_ISFETCHING:
      return {
        ...state,
        isFetching: action.status
          ? [...state.isFetching, action.userId]
          : state.isFetching.filter((id) => id !== action.userId),
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const followUser = (userId) => ({
  type: FOLLOW_USER,
  userId,
});

export const unfollowUser = (userId) => ({
  type: UNFOLLOW_USER,
  userId,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalUsersCount = (usersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  usersCount,
});

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile,
});

export const toggleIsFetching = (userId, status) => ({
  type: TOGGLE_ISFETCHING,
  userId,
  status,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    usersAPI.getUsers(currentPage, pageSize).then((res) => {
      dispatch(setUsers(res.items));
      dispatch(setTotalUsersCount(res.totalCount));
    });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(userId, true));
    usersAPI.follow(userId).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(followUser(userId));
      }
      dispatch(toggleIsFetching(userId, false));
    });
  };
};

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(userId, true));
    usersAPI.unfollow(userId).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(unfollowUser(userId));
      }
      dispatch(toggleIsFetching(userId, false));
    });
  };
};

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

export default usersReducer;
