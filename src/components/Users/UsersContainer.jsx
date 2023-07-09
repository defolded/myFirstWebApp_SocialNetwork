import {
  followUserActionCreator,
  setCurrentPageActionCreator,
  setUsersActionCreator,
  unfollowUserActionCreator,
  setTotalUsersCount,
} from "../../redux/usersReducer";
import Users from "./Users";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    state: state.users,
    pageSize: state.pageSize,
    totalUsersCount: state.totalUsersCount,
    currentPage: state.currentPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userId) => dispatch(followUserActionCreator(userId)),
    unfollowUser: (userId) => dispatch(unfollowUserActionCreator(userId)),
    setUsers: (users) => dispatch(setUsersActionCreator(users)),
    setCurrentPage: (currentPage) =>
      dispatch(setCurrentPageActionCreator(currentPage)),
    setTotalUsersCount: (usersCount) =>
      dispatch(setTotalUsersCount(usersCount)),
  };
};

const SuperUsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default SuperUsersContainer;
