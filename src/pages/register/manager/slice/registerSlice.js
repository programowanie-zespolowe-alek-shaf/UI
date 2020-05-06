import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  login: { value: '', error: '' },
  password: { value: '', error: '' },
  passwordRepeat: { value: '', error: '' },
  firstName: { value: '', error: '' },
  lastName: { value: '', error: '' },
  email: { value: '', error: '' },
  phone: { value: '', error: '' },
  address: { value: '', error: '' },
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
    setError(state, action) {
      const { field, error } = action.payload;
      state[field] = { ...state[field], error };
    },
    setDisabled(state, action) {
      state.disabled = action.payload;
    },
    clearErrors(state) {
      Object.keys(state).forEach((key) => {
        state[key] = { ...state[key], error: '' };
      });
      state.disabled = false;
    },
    clearAll() {
      return initialState;
    },
  },
});
