import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {id: "1", title: "cleaning", status: "finished", url: "https://google.com", createdAt: "Apr 1", updatedAt: "Apr 15"},
  {id: "2", title: "washing", status: "unfinished", url: "https://yahoo.co.jp", createdAt: "May 1", updatedAt: "May 6"},
];

export const CrudSlice = createSlice({
  name: 'create',
  initialState,
  reducers: {
    create: (state, action) => {
      state.push(action.payload)
    },
    edit: (state, action) => {
      const issues = state.filter(st => st.id !== action.payload.id);
      return [...issues, action.payload.input];
    },
    remove: (state, action) => {
      return state.filter(st => st.id !== action.payload);
    },
  },
});

export const {create, edit, remove, get} = CrudSlice.actions;

export default CrudSlice.reducer