import { usersAPI } from "../api/api";

const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_ISFETCHING = "TOGGLE-ISFETCHING";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  page: 1,
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
        page: action.page,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.usersCount,
      };
    case TOGGLE_ISFETCHING:
      return {
        ...state,
        isFetching: action.status
          ? [...state.isFetching, action.userId]
          : state.isFetching.filter((id) => id !== action.userId),
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

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  page,
});

export const setTotalUsersCount = (usersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  usersCount,
});

export const toggleIsFetching = (userId, status) => ({
  type: TOGGLE_ISFETCHING,
  userId,
  status,
});

export const getUsers = (page, pageSize) => async (dispatch) => {
  dispatch(setCurrentPage(page));
  let res = await usersAPI.getUsers(page, pageSize);
  dispatch(setUsers(res.items));
  dispatch(setTotalUsersCount(res.totalCount));
};

export const follow = (userId) => async (dispatch) => {
  dispatch(toggleIsFetching(userId, true));
  let res = await usersAPI.follow(userId);
  if (res.data.resultCode === 0) {
    dispatch(followUser(userId));
  }
  dispatch(toggleIsFetching(userId, false));
};

export const unfollow = (userId) => async (dispatch) => {
  dispatch(toggleIsFetching(userId, true));
  let res = usersAPI.unfollow(userId);
  if (res.data.resultCode === 0) {
    dispatch(unfollowUser(userId));
  }
  dispatch(toggleIsFetching(userId, false));
};

export default usersReducer;
