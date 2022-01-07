import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  articles: [],
  userArticles: [],
  arLoading: true,
  arError: "",
  arStatus: "",
};

export const articleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ERROR_ARTICLE:
      return {
        ...state,
        articles: [],
        arLoading: false,
        arError: payload,
        arStatus: "",
      };
    case ActionTypes.SEARCH_REQUEST:
      return {
        ...state,
        articles: [],
        arLoading: true,
        arError: "",
        arStatus: "loading",
      };
    case ActionTypes.SEARCH:
      const articlesNew = [...payload.articles]
      return {
        ...state,
        articles: articlesNew,
        arLoading: false,
        arError: "",
        arStatus: "loaded",
      };
    case ActionTypes.ARTICLE_REQUEST:
      return {
        ...state,
        arLoading: true,
        arError: "",
        arStatus: "loading",
      };
    case ActionTypes.NEW_ARTICLE:
      return {
        ...state,
        arLoading: false,
        arError: "",
        arStatus: "created",
      };
    case ActionTypes.EMPTY_ARTICLES:
      return {
        ...state,
        articles: [],
        arLoading: false,
        arError: "",
        arStatus: "empty",
      };
    case ActionTypes.LOAD_ARTICLES:
      // const userArticles = [...payload.articles]
      return {
        ...state,
        userArticles: payload,
        arLoading: false,
        arError: "",
        arStatus: "loaded",
      };
    case ActionTypes.UPDATE_LIKE:
      const updatedArticles = state.articles.map(article => article.id === payload.id ? {...article, likes: payload.likes} : article)
      return {
        ...state,
        articles: updatedArticles,
        arLoading: false,
        arError: "",
        arStatus: "like created",
      }
    case ActionTypes.SET_ERROR_LIKE:
      return {
        ...state,
        likeLoading: false,
        likeError: payload,
        likeStatus: "",
      };
    case ActionTypes.LIKE_REQUEST:
      return {
        ...state,
        likeLoading: true,
        likeError: "",
        likeStatus: "loading",
      };
    default:
      return state;
  }
};
