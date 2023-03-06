const initialState = [
  { text: "Coding", priority: "High", id: 1 },
  { text: "Cooking", priority: "Medium", id: 2 },
  { text: "Watching Movie", priority: "Low", id: 3 },
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add": {
      // Can return just the new todos array - no extra object around it
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          priority: action.payload.priority,
        },
      ];
    }
    case "edit": {
      return [
        ...state.map((todo) => {
          if (todo.id === action.payload.id) {
            return action.payload;
          } else {
            return todo;
          }
        }),
      ];
    }
    case "delete": {
      return state.filter((todo) => todo.id !== action.payload.id);
    }
    default:
      return state;
  }
};

export default todoReducer;
