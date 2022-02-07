const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  message: "",
  error: false,
};

export const loginReducer = (state = initialState, action) => {
  if (action === "LOGIN") {
    return{
        ...state,
        message: "Login succesful",
        error: false,
    }
  } else {
    return state;
  }
};
