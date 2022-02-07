const initialState = {
  user: localStorage.getItem("user") || null,
  message: "",
  error: false,
};

export const signUpReducer = (state = initialState, action) => {
  if (action === "SIGN_UP") {
      console.log("fired")
    return state.user === null
      ? localStorage.setItem("user", action.payload)
      : ((state.error = true), (state.message = "User already signed up"));

    // return { ...state };
  } else {
    return state;
  }
};
