import React, { useEffect, useReducer } from 'react';
import { reducer, actions, initialState } from './slice/formSlice';
import { Typography, TextField, Grid, Box, Link } from '@material-ui/core';
import SubmitButton from 'components/submitButton/SubmitButton';

const Form = (props) => {
  const [state, dispatchLocal] = useReducer(
    reducer,
    initialState(props.inputs)
  );

  console.log(state);

  const onChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    dispatchLocal(actions.setValue({ field: inputName, value: inputValue }));

    // if (state[inputName].tested) {
    //   validateInput(inputName, inputValue);
    // }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({ title: 'Ksionzka' });
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Typography variant='h6' gutterBottom>
        {props.title}
      </Typography>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          {props.inputs.map((input, index) => {
            if (input.type === 'text' || input.type === 'number') {
              return (
                <Grid key={`admin-add-book-input-${index}`} item xs={12}>
                  <TextField
                    type={input.type}
                    name={input.name}
                    id={input.id}
                    label={input.label}
                    variant='outlined'
                    required
                    fullWidth
                    onChange={onChange}
                    // value={state[inputName].value}
                    // error={state[inputName].tested && !state[inputName].correct}
                    // onBlur={onBlur}
                    // className={classes.input}
                    // disabled={state.disabled}
                    // helperText={
                    // state[inputName].tested && !state[inputName].correct
                    // ? INPUT_ERRORS[inputName]
                    // : false
                  />
                </Grid>
              );
            } else {
              return null;
            }
          })}
          <Grid item xs={12}>
            <SubmitButton
              isLoading={props.isMakingRequest}
              fullWidth
              variant='contained'
              color='primary'
              disableElevation
            >
              {props.submitButtonText}
            </SubmitButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
