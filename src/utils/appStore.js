import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/UserSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
export default appStore;
