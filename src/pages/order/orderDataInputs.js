import INPUT_REGEXPS from '../register/manager/inputs/regexps';
export const customerDataInputs = (init) => {
  return {
    firstName: {
      type: 'text',
      name: 'firstName',
      id: 'imie',
      label: 'Imię',
      defaultValue: init.firstName,
      regexp: INPUT_REGEXPS.firstName,
      helperText: 'Poprawne imię jest wymagane',
    },
    lastName: {
      type: 'text',
      name: 'lastName',
      id: 'nazwisko',
      label: 'Nazwisko',
      defaultValue: init.lastName,
      regexp: INPUT_REGEXPS.lastName,
      helperText: 'Poprawne nazwisko jest wymagane',
    },
    email: {
      type: 'text',
      name: 'email',
      id: 'email',
      label: 'Email',
      defaultValue: init.email,
      regexp: INPUT_REGEXPS.email,
      helperText: 'Poprawny adres email jest wymagany',
    },
    phone: {
      type: 'number',
      name: 'phone',
      id: 'phone',
      label: 'Numer telefonu',
      defaultValue: init.phone,
      regexp: INPUT_REGEXPS.phone,
      helperText: 'Poprawny numer telefonu jest wymagany',
    },
    address: {
      type: 'text',
      name: 'address',
      id: 'address',
      label: 'Ulica, miejscowość, kod pocztowy',
      defaultValue: init.address,
      regexp: INPUT_REGEXPS.address,
      helperText: 'Poprawny adres jest wymagany',
    },
  };
};
