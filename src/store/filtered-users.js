import { createSlice } from "@reduxjs/toolkit";

const filteredUsers = createSlice({
  name: "filtered users",
  initialState: {
    users: [],
    searchedUser: [],
  },
  reducers: {
    filterUsers(state, action) {
      const searchedUsers = action.payload;
      state.users = searchedUsers;
    },
    addSearchedUser(state, action) {
      state.searchedUser = action.payload;
    },
  },
});

export const filteredUsersActions = filteredUsers.actions;

export default filteredUsers.reducer;
