import { configureStore } from "@reduxjs/toolkit";

import filteredUsers from "./filtered-users";
import uiState from "./ui-state";

const store = configureStore({
  reducer: { users: filteredUsers, ui: uiState },
});

export default store;
