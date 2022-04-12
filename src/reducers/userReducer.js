import LOGIN from "../Constants/user.actionTypes";

const INITIAL_STATE_LOGIN = {
  logStatus: false,
  email: "",
  password: "",
  id: "",
  firstName: "",
  lastName: "",
  token: "",
};

/**
 * This reducer return user LOGIN type
 * @param {Object} state > INITIAL_STATE_LOGIN 
 * @param {Object} action (type, payload)
 * @returns {Object} state
 */
const userReducer = (state = INITIAL_STATE_LOGIN, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: action.email,
        password: action.password,
        logStatus: true,
        token: action.token,
      };
    default:
      return state;
  }
};

export default userReducer;
