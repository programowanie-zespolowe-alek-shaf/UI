const UserProfileInputs = () => {
  return {
    username: {
      type: 'text',
      name: 'username',
      id: 'username',
      label: 'Login',
      defaultValue: false,
      regexp: /^(?!\s*$).+/,
      helperText: 'Login jest wymagany',
    },
    firstName: {
      type: 'text',
      name: 'firstName',
      id: 'firstName',
      label: 'Imię',
      defaultValue: false,
      regexp: /^(?!\s*$).+/,
      helperText: 'Imię użytkownika jest wymagane',
    },
    lastName: {
      type: 'text',
      name: 'lastName',
      id: 'lastName',
      label: 'Nazwisko',
      defaultValue: false,
      regexp: /^(?!\s*$).+/,
      helperText: 'Nazwisko użytkownika jest wymagane',
    },
    email: {
      type: 'text',
      name: 'email',
      id: 'email',
      label: 'E-mail',
      defaultValue: false,
      regexp: /^(?!\s*$).+/,
      helperText: 'E-mail jest wymagany',
    },
    phone: {
      type: 'text',
      name: 'phone',
      id: 'phone',
      label: 'Nr telefonu',
      defaultValue: false,
      regexp: /^(?!\s*$).+/,
      helperText: 'Nr telefonu jest wymagany',
    },
    address: {
      type: 'text',
      name: 'address',
      id: 'address',
      label: 'Adres',
      defaultValue: false,
      regexp: /^(?!\s*$).+/,
      helperText: 'Adres jest wymagany',
    },
  };
};

export default UserProfileInputs;
