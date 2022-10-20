import { createSlice } from "@reduxjs/toolkit";

const UPDATE_USERS = "network/users";
const ROLLBACK_USERS = "network/usersRollback";

const initialState = {
  users: [],
};

const networkSlice = createSlice({
  name: "network",
  initialState,
  reducers: {
    users: (state, action) => {
      const data = action.payload.data.results;
      state.users = data;
    },
    usersRollback: (state, action) => {
      // TODO:
    },
    getUsers: {
      reducer: (state, action) => {
        // TODO:
      },
      prepare: (payload) => {
        return {
          meta: {
            offline: {
              effect: {
                url: "https://rickandmortyapi.com/api/character",
                method: "GET",
              },
              commit: { type: UPDATE_USERS },
              rollback: { type: ROLLBACK_USERS },
            },
          },
        };
      },
    },
  },
});

export const { getUsers } = networkSlice.actions;
export default networkSlice.reducer;
