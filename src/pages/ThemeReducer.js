const initialState = { color: "dark" };

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "dark": {
      return { color: "dark" };
    }
    case "light": {
      return { color: "light" };
    }
    default:
      return state;
  }
};

export default themeReducer;
