import INPUT_LABELS from './labels';
import INPUT_NAMES from './names';

const inputs = [
  {
    input: {
      type: 'text',
      name: INPUT_NAMES.firstName,
      autoComplete: 'fname',
      id: 'firstName',
      label: INPUT_LABELS.firstName,
    },
    sizes: {
      xs: 12,
      sm: 6,
    },
  },
  {
    input: {
      sm: 6,
      type: 'text',
      name: INPUT_NAMES.lastName,
      autoComplete: 'lname',
      id: 'lastName',
      label: INPUT_LABELS.lastName,
    },
    sizes: {
      xs: 12,
      sm: 6,
    },
  },
  {
    input: {
      type: 'text',
      name: INPUT_NAMES.login,
      autoComplete: 'login',
      id: 'login',
      label: INPUT_LABELS.login,
    },
    sizes: {
      xs: 12,
    },
  },
  {
    input: {
      type: 'password',
      name: INPUT_NAMES.password,
      autoComplete: 'current-password',
      id: 'password',
      label: INPUT_LABELS.password,
    },
    sizes: {
      xs: 12,
    },
  },
  {
    input: {
      type: 'password',
      name: INPUT_NAMES.passwordRepeat,
      autoComplete: 'current-password',
      id: 'passwordRepeat',
      label: INPUT_LABELS.passwordRepeat,
    },
    sizes: {
      xs: 12,
    },
  },
  {
    input: {
      type: 'email',
      name: INPUT_NAMES.email,
      autoComplete: 'email',
      id: 'email',
      label: INPUT_LABELS.email,
    },
    sizes: {
      xs: 12,
    },
  },
  {
    input: {
      type: 'number',
      name: INPUT_NAMES.phone,
      autoComplete: 'phone',
      id: 'phone',
      label: INPUT_LABELS.phone,
    },
    sizes: {
      xs: 12,
    },
  },
  {
    input: {
      type: 'text',
      name: INPUT_NAMES.address,
      autoComplete: 'address',
      id: 'address',
      label: INPUT_LABELS.address,
    },
    sizes: {
      xs: 12,
    },
  },
];

export default inputs;
