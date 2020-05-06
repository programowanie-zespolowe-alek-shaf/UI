import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  message: null,
  type: null,
  isActive: false,
  date: null,
};

const globalAlertSlice = createSlice({
  name: 'globalAlert',
  initialState: {
    message: null,
  },
  reducers: {
    setAlert(state, action) {
      state.isActive = true;
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.date = action.payload.date;
    },
    discardAlert(state) {
      state.isActive = false;
    },
  },
});

const { actions, reducer } = globalAlertSlice;
const { setAlert, discardAlert } = actions;

export const triggerGlobalAlert = (type, message) => (dispatch) => {
  const date = new Date();
  dispatch(setAlert({ message: message, type: type, date: date }));
};

export const discardGlobalAlert = () => (dispatch) => {
  dispatch(discardAlert());
};

export default reducer;
