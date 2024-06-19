import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducersMain/usersReducer";

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});
