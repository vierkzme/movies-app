const moviesState = {
  movies: [],
};

const moviesReducer = (state = moviesState, action) => {
  switch (action.type) {
    case "INSERT_MOVIES":
      return {
        ...state,
        movies: action.movies,
      };
    default:
      return state;
  }
};

export { moviesReducer };
