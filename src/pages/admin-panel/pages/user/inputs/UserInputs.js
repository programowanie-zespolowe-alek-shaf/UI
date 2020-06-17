import INPUT_REGEXPS from "../../../../register/manager/inputs/regexps";
import INPUT_NAMES from "../../../../register/manager/inputs/names";

const userInputs = () => {
  return {
    username: {
      type: 'text',
      name: 'username',
      id: 'username',
      label: 'Login',
      defaultValue: false,
      regexp: INPUT_REGEXPS[INPUT_NAMES.login],
      helperText: 'Login jest wymagany',
    },
    firstName: {
      type: 'text',
      name: 'firstName',
      id: 'firstName',
      label: 'Imię',
      defaultValue: false,
      regexp: INPUT_REGEXPS[INPUT_NAMES.firstName],
      helperText: 'Imię użytkownika jest wymagane',
    },
    lastName: {
      type: 'text',
      name: 'lastName',
      id: 'lastName',
      label: 'Nazwisko',
      defaultValue: false,
      regexp: INPUT_REGEXPS[INPUT_NAMES.lastName],
      helperText: 'Nazwisko użytkownika jest wymagane',
    },
    email: {
      type: 'text',
      name: 'email',
      id: 'email',
      label: 'E-mail',
      defaultValue: false,
      regexp: INPUT_REGEXPS[INPUT_NAMES.email],
      helperText: 'E-mail jest wymagany',
    },
    phone: {
      type: 'text',
      name: 'phone',
      id: 'phone',
      label: 'Nr telefonu',
      defaultValue: false,
      regexp: INPUT_REGEXPS[INPUT_NAMES.phone],
      helperText: 'Nr telefonu jest wymagany',
    },
    address: {
      type: 'text',
      name: 'address',
      id: 'address',
      label: 'Adres',
      defaultValue: false,
      regexp: INPUT_REGEXPS[INPUT_NAMES.address],
      helperText: 'Adres jest wymagany',
    },
    enabled: {
      type: 'checkbox',
      name: 'enabled',
      id: 'enabled',
      label: 'Enabled',
      defaultValue: false,
    },
    roles: {
      type: 'select',
      name: 'roles',
      id: 'roles',
      label: 'Uprawnienia',
      options: [
        {value: 'ROLE_USER', name: 'Użytkownik'},
        {value: 'ROLE_ADMIN', name: 'Admin'},
      ],
      defaultValue: false,
      regexp: /^(?!\s*$).+/,
      helperText: 'Uprawnienie jest wymagane',
    },
  };
};

export default userInputs;
