import axios from "axios";
import React from "react";
import ProfilePage from "./ProfilePage";
import { setProfile } from "../../redux/usersReducer";

class ProfilePageContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/2")
      .then((res) => this.props.setProfile(res.data));
  }

  render() {
    return <ProfilePage {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {};
};

export default axios.connect(mapStateToProps, { setProfile })(
  ProfilePageContainer
);
