const initialState = {
    displayName: "",
    email: "",
    emailVerified: "",
    phoneNumber: "",
    photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8B0hBF1hdy4mTfoMA1Gp0kxYtbp8hSXjbWyTUHoQWs0xbRIs-",
    uid: "",
    accessToken: "",
    providerData: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Login":
      return action.payload;
    case "Logout":
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
