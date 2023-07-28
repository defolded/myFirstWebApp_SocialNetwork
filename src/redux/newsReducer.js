import { newsApi } from "../api/newsApi";

const GET_ARTICLES = "GET-ARTICLES";

let initialState = {
  articles: [],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES: {
      return {
        ...state,
        articles: action.articles,
      };
    }
    default:
      return state;
  }
};

export const getArticlesSuccess = (articles) => ({
  type: GET_ARTICLES,
  articles,
});

export const getArticles = () => async (dispatch) => {
  let res = await newsApi.getTopHeadlinesForUS();
  if (res.status === 200) {
    dispatch(getArticlesSuccess(res.data.articles));
  }
};

export default newsReducer;
