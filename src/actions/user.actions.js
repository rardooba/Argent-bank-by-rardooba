import LOGIN from "../Constants/user.actionTypes"

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