const initialAuthState = { isLoggedIn: false };

const authReducer = (state = initialAuthState, action) =>{
  switch (action.type) {
    case "Login":
      return {isLoggedIn: true};
    case "Logout":
      return {isLoggedIn: false};
    default:
      return state;
  }
};

export default authReducer;
