import React, { useReducer } from 'react';
import { reducer, actions, initialState } from './slice/formSlice';
import {
  Typography,
  TextField,
  Grid,
  Box,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import SubmitButton from 'components/submitButton/SubmitButton';
import { toArray } from 'global/utils/utils';
import useFormStyles from './FormStyles';

const setValue = (inputName, inputValue, dispatch) => {
  dispatch(actions.setValue({ field: inputName, value: inputValue }));
};

const setTested = (inputName, dispatch) => {
  dispatch(actions.setTested({ field: inputName, tested: true }));
};

const setCorrect = (inputName, inputValue, regexp, dispatch) => {
  const isCorrect = regexp.test(inputValue);
  dispatch(
    actions.setCorrect({
      field: inputName,
      correct: isCorrect,
    })
  );
};

const Form = (props) => {
  const classes = useFormStyles();
  const [state, dispatch] = useReducer(
    reducer,
    initialState(toArray(props.inputs))
  );

  console.log(state);

  const onChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setValue(inputName, inputValue, dispatch);
    setCorrect(inputName, inputValue, props.inputs[inputName].regexp, dispatch);
  };

  const onChangeCheckbox = (event) => {
    const inputName = event.target.name;
    const { checked } = event.target;

    setValue(inputName, checked, dispatch);
  };

  const onBlur = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setCorrect(inputName, inputValue, props.inputs[inputName].regexp, dispatch);
    setTested(inputName, dispatch);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const payload = {};
    toArray(props.inputs).forEach((input) => {
      payload[input.name] = state[input.name].value;
    });
    props.onSubmit(payload);
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Typography variant='h6' className={classes.title}>
        {props.title}
      </Typography>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          {toArray(props.inputs).map((input, index) => {
            if (input.type === 'text' || input.type === 'number') {
              return (
                <Grid key={`admin-add-book-input-${index}`} item xs={12}>
                  <TextField
                    type={input.type}
                    name={input.name}
                    id={input.id}
                    label={input.label}
                    variant='outlined'
                    value={state[input.name].value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={
                      state[input.name].tested && !state[input.name].correct
                    }
                    disabled={state.disabled}
                    helperText={
                      state[input.name].tested && !state[input.name].correct
                        ? props.inputs[input.name].helperText
                        : false
                    }
                    required
                    fullWidth
                  />
                </Grid>
              );
            } else if (input.type === 'checkbox') {
              return (
                <Grid key={`admin-add-book-checkbox-${index}`} item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox onChange={onChangeCheckbox} name={input.name} />
                    }
                    label={input.label}
                  />
                </Grid>
              );
            } else if (input.type === 'select') {
              return (
                <Grid key={`admin-add-book-select-${index}`} item xs={12}>
                  <FormControl className={classes.select}>
                    <InputLabel id={`select-${index}`}>
                      {input.label}
                    </InputLabel>
                    <Select
                      labelId={`select-${index}`}
                      name={input.name}
                      id={input.id}
                      value={state[input.name].value}
                      onChange={onChange}
                      error={
                        state[input.name].tested && !state[input.name].correct
                      }
                      onBlur={onBlur}
                    >
                      {input.options.map((option, index) => {
                        return (
                          <MenuItem
                            key={`select-${input.name}-option-${index}`}
                            value={option.value}
                          >
                            {option.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
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
