import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskslice";

export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
