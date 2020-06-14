import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lastRoute: '/',
};

const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setLastRoute(state, action) {
      state.lastRoute = action.payload;
    },
  },
});
const { actions, reducer } = routeSlice;

export const {
  setLastRoute
} = actions;

export default reducer;
