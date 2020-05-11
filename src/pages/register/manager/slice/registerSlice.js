import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  login: { value: '', tested: false, correct: false },
  password: { value: '', tested: false, correct: false },
  passwordRepeat: { value: '', tested: false, correct: false },
  firstName: { value: '', tested: false, correct: false },
  lastName: { value: '', tested: false, correct: false },
  email: { value: '', tested: false, correct: false },
  phone: { value: '', tested: false, correct: false },
  address: { value: '', tested: false, correct: false },
  disabled: false,
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setValue(state, action) {
      const { field, value } = action.payload;
      state[field] = { ...state[field], value };
    },
    setTested(state, action) {
      const { field, tested } = action.payload;
      state[field] = { ...state[field], tested };
    },
    setCorrect(state, action) {
      const { field, correct } = action.payload;
      state[field] = { ...state[field], correct };
    },
    setDisabled(state, action) {
      state.disabled = action.payload;
    },
    clearAll() {
      return initialState;
    },
  },
});
