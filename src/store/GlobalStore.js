import { configureStore } from "@reduxjs/toolkit";

import filteredUsers from "./filtered-users";
import uiState from "./ui-state";
import appUsers from "./app-users";

const store = configureStore({
  reducer: { users: filteredUsers, ui: uiState, appUsers: appUsers },
});

export default store;
