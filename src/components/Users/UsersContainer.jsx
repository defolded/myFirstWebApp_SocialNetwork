import {
  followUserActionCreator,
  setUsersActionCreator,
  unfollowUserActionCreator,
} from "../../redux/usersReducer";
import Users from "./Users";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    state: state.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userId) => dispatch(followUserActionCreator(userId)),
    unfollowUser: (userId) => dispatch(unfollowUserActionCreator(userId)),
    setUsers: (users) => dispatch(setUsersActionCreator(users)),
  };
};

const SuperUsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default SuperUsersContainer;
