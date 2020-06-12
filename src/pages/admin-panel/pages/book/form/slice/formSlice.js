import { createSlice } from '@reduxjs/toolkit';

export const initialState = (inputs) => {
  let initialState = { disabled: false };

  inputs.forEach((input) => {
    initialState[input.name] = {
      value: '',
      tested: false,
      correct: false,
    };
  });

  return initialState;
};

const formSlice = createSlice({
  name: 'form',
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
  },
});

export const { reducer, actions } = formSlice;
