const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const postsReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        profilePicture:
          "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Terminator-2-judgement-day.jpg/220px-Terminator-2-judgement-day.jpg",
        username: "test",
        message: state.newPostText,
      };

      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.text;
      return state;

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const onPostChangeActionCreator = (textValue) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: textValue,
});

export default postsReducer;
