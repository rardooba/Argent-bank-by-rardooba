//* REDUX TOOLKIT
import {
  createSlice,
  createAsyncThunk,
  configureStore,
} from "@reduxjs/toolkit";

//REDUX PERSIST
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

//? logger is a redux debbuger > show result in console browser
//import logger from "redux-logger";

//Axios
import axios from "axios";

//------------------------------------------------------------//

//* Service (API Call)
/**
 * Post user credentials on API => Get user token
 */
export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }, thunkApi) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}/user/login`, {
        email,
        password,
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return thunkApi.rejectWithValue(err.response.data);
      });
  }
);

/**
 * Get user infos from API => Post firstName/LastName in Profile feild
 */
export const userInfo = createAsyncThunk(
  "user/userInfo",
  async (_, thunkApi) => {
    const token = thunkApi.getState().user.token;
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/user/profile`,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return thunkApi.rejectWithValue(err.response.data);
      });
  }
);

/**
 * Update user name in API
 */
export const editName = createAsyncThunk(
  "user/editName",
  async ({ firstName, lastName }, thunkApi) => {
    //getState fait ref à l'etat initialStore Slice auth > token
    const token = thunkApi.getState().user.token;
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}/user/profile`,
      data: { firstName, lastName },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return thunkApi.rejectWithValue(err.response.data);
      });
  }
);

// => INITIALE STATE
const INITIAL_STATE = {
  isAuth: false,
  token: "",
  email: "",
  firstName: "",
  lastName: "",
  status: null,
};

//* SLICE => userSlice
const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    purge: () => INITIAL_STATE,
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.status = null;
    },
    [login.fulfilled]: (state, action) => {
      state.status = "success";
      state.isAuth = true;
      state.token = action.payload.body.token;
    },
    [login.rejected]: (state, { payload }) => {
      state.status = payload;
    },
    [userInfo.fulfilled]: (state, { payload }) => {
      const { email, firstName, lastName } = payload.data.body;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
    },
    [userInfo.rejected]: (_, { payload }) => {
      return INITIAL_STATE;
    },
    [editName.fulfilled]: (state, { payload }) => {
      const { firstName, lastName } = payload.data.body;
      state.firstName = firstName;
      state.lastName = lastName;
    },
    [editName.rejected]: (state, { payload }) => {
      state.status = payload;
    },
  },
});

//Action creators
export const { purge } = userSlice.actions;

//REDUX PERSIST Config
const persistConfig = {
  key: "user",
  version: 1,
  storage,
};

//Persist Reducer
const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

//* STORE init + Logger add with >> ().concat(logger)
export const store = configureStore({
  reducer: { user: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
