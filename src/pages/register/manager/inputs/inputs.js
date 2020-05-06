import messages from '../../messages/messages.js';

const inputs = [
  {
    input: {
      type: 'text',
      name: 'firstName',
      autoComplete: 'fname',
      id: 'firstName',
      label: messages.firstName,
      autoFocus: true,
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
      name: 'lastName',
      autoComplete: 'lname',
      id: 'lastName',
      label: messages.lastName,
    },
    sizes: {
      xs: 12,
      sm: 6,
    },
  },
  {
    input: {
      type: 'text',
      name: 'login',
      autoComplete: 'login',
      id: 'login',
      label: messages.login,
    },
    sizes: {
      xs: 12,
    },
  },
  {
    input: {
      type: 'password',
      name: 'password',
      autoComplete: 'current-password',
      id: 'password',
      label: messages.password,
    },
    sizes: {
      xs: 12,
    },
  },
  {
    input: {
      type: 'password',
      name: 'passwordRepeat',
      autoComplete: 'current-password',
      id: 'passwordRepeat',
      label: messages.passwordRepeat,
    },
    sizes: {
      xs: 12,
    },
  },
  {
    input: {
      type: 'email',
      name: 'email',
      autoComplete: 'email',
      id: 'email',
      label: messages.email,
    },
    sizes: {
      xs: 12,
    },
  },
  {
    input: {
      type: 'number',
      name: 'phone',
      autoComplete: 'phone',
      id: 'phone',
      label: messages.phone,
    },
    sizes: {
      xs: 12,
    },
  },
  {
    input: {
      type: 'text',
      name: 'address',
      autoComplete: 'address',
      id: 'address',
      label: messages.address,
    },
    sizes: {
      xs: 12,
    },
  },
];

export default inputs;
