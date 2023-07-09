const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";

let initialState = {
  users: [
    {
      id: 1,
      profilePicture:
        "https://wow.zamimg.com/uploads/screenshots/normal/856222-wrathscale-naga.jpg",
      username: "Davos Seaworth",
      message: "Give me back my fingers!",
      isFollowed: true,
    },
    {
      id: 2,
      profilePicture:
        "https://cdn.vox-cdn.com/thumbor/ylUiqp7B7CF9KB7JVwyCHJjU8DQ=/98x0:1168x713/1400x788/filters:focal(98x0:1168x713):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49747471/Screen_Shot_2016-06-01_at_10.43.06_AM.0.0.png",
      username: "Tommen Lannister",
      message: "I want my Kingdom and Myrcella!",
      isFollowed: true,
    },
    {
      id: 3,
      profilePicture:
        "https://www.greekboston.com/wp-content/uploads/2017/12/Socrates.jpg",
      username: "Doran Martell",
      message: "Let me think...",
      isFollowed: true,
    },
    {
      id: 4,
      profilePicture:
        "https://media.vanityfair.com/photos/57a235c682b926ca1e593883/master/w_2560%2Cc_limit/joker-evolution-ss04.jpg",
      username: "TestTestTest TestTestTest",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis nisi et arcu scelerisque lobortis. Nam non leo vitae massa ultrices viverra ut eu nibh. Nulla ullamcorper consequat metus, sit amet finibus sapien porttitor non. Phasellus at urna egestas, posuere ligula aliquet, feugiat nibh. Vestibulum commodo vitae quam ac tincidunt. Nulla scelerisque, est eget condimentum congue, est magna elementum risus, non hendrerit nunc magna id neque. Curabitur elementum sed justo nec ullamcorper. Cras malesuada sapien imperdiet orci hendrerit, eget molestie turpis blandit. Donec dignissim arcu non tellus venenatis lacinia. Suspendisse dictum tristique porta. Suspendisse in sapien at dolor rhoncus feugiat sit amet in dolor. Vestibulum odio elit, aliquet sed quam eget, dapibus auctor erat. Morbi eu ipsum ut nisl sagittis lacinia vitae eget erat. Etiam at ante ut quam vestibulum auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis tristique vel quam in condimentum. In hac habitasse platea dictumst. Donec ligula lectus, venenatis et ipsum eget, mattis feugiat turpis. Maecenas sapien arcu, aliquet ut arcu sed, laoreet convallis velit. Nam a tempor diam. Integer suscipit tortor vel pretium placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam cursus bibendum posuere. Suspendisse congue mi tristique facilisis accumsan. Fusce ut fermentum elit, eget tristique nisl. Aliquam erat volutpat. Vestibulum a eros lectus. Ut pretium enim ante, sit amet pellentesque justo tempor porttitor. Vivamus dui urna, vehicula in condimentum vel, ultrices non metus. Etiam pretium dolor tristique neque aliquet, ac elementum diam ultrices. Cras posuere lectus eget tortor vestibulum, sed pellentesque dolor tristique. Curabitur feugiat quam dolor, a interdum tellus luctus lacinia. Vestibulum finibus lacus nec tincidunt maximus. Sed in ligula ante. Praesent mattis pharetra urna, vel faucibus tortor molestie in. Duis non ipsum quis enim volutpat gravida. Sed neque nisi, ornare sit amet cursus ut, blandit nec risus. Sed interdum sodales imperdiet. Praesent ac erat sit amet lorem laoreet sodales sed in orci. Nulla feugiat tincidunt ligula eu convallis. Nulla feugiat tincidunt ligula eu convallis. Proin turpis lacus, commodo in porttitor eget, bibendum id lectus.",
      isFollowed: false,
    },
  ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
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
    default:
      return state;
  }
};

export const followUserActionCreator = (userId) => ({
  type: FOLLOW_USER,
  userId,
});

export const unfollowUserActionCreator = (userId) => ({
  type: UNFOLLOW_USER,
  userId,
});

export const setUsersActionCreator = (users) => ({
  type: SET_USERS,
  users,
});

export const setCurrentPageActionCreator = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalUsersCount = (usersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  usersCount,
});

export default usersReducer;