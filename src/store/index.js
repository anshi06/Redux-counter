//Using redux-tookit
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

const toolkitStore = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default toolkitStore;
