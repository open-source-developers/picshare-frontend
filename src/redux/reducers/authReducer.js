const initialState = { token: null, loggedIn: false, error: {} };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default authReducer;
