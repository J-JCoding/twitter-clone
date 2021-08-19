import { createSlice } from "@reduxjs/toolkit";

const filteredUsers = createSlice({
  name: "filtered users",
  initialState: {
    users: [],
  },
  reducers: {
    filterUsers(state, action) {
      const searchedUsers = action.payload;
      state.users = searchedUsers;
    },
  },
});

export const filteredUsersActions = filteredUsers.actions;

export default filteredUsers.reducer;
