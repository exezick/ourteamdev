import { createSlice } from '@reduxjs/toolkit'
import storageSession from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

const initialState = {
  count: 0,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
})

const encryptTransformer = encryptTransform({
  secretKey: 'CfyqWgWdFDXzj1tRXs',
  onError: (error) => {
      // Handle the error.
      console.error(error);
  },
});

// Persist reducer
const persistedReducer = persistReducer(
  {
      key: "ourteamdev",
      version: 1,
      storage: storageSession,
      transforms: [encryptTransformer, /*expirationTransformer*/],
  },
  appSlice.reducer
);


// Action creators are generated for each case reducer function
export const actions = appSlice.actions

export default persistedReducer