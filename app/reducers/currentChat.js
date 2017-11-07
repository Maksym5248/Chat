

const userReducer = (state = {name: "aaa"}, action) => {
  switch (action.type) {
    case "Login":
      return { ...state, ...action.payload };
    case "Logout":
      return {};
    default:
      return state;
  }
};

export default userReducer;
