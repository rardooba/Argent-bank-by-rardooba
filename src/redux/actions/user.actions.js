//Action types
import { LOGIN, LOGOUT, EDITNAME } from "../Constants/user.actionTypes";

/**
 * Action function for user login (used with Thunk middleware)
 * @param {String} email
 * @param {String} password
 * @param {String} token
 * @returns {Object}
 */
export const login = (email, password, token) => ({
  type: LOGIN,
  email,
  password,
  token,
});

/**
 * Action function for user logOUT (used with Thunk middleware)
 * @returns {Object} type > "LOGOUT"
 */
export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: LOGOUT,
  };
};

/**
 * Action function for user edit name (used with Thunk middleware)
 * @param {String} firstName
 * @param {String} lastName
 * @returns {Object}
 */
export const editName = (firstName, lastName) => ({
  type: EDITNAME,
  firstName,
  lastName,
});
