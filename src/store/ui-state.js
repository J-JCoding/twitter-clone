import { createSlice } from "@reduxjs/toolkit";

const uiState = createSlice({
  name: "ui state",
  initialState: {
    searchInput: false,
    curPage: "",
  },
  reducers: {
    // Toggling the input state on the search page
    openSearchInput(state) {
      state.searchInput = true;
    },
    closeSearchInput(state) {
      state.searchInput = false;
    },

    // State for changing the header based on the users page
    setCurPage(state, action) {
      state.curPage = action.payload;
    },
  },
});

export const uiActions = uiState.actions;

export default uiState.reducer;
