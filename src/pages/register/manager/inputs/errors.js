import INPUT_NAMES from './names';

const INPUT_ERRORS = {
  [INPUT_NAMES.firstName]: 'Min. 1 znak, bez spacji',
  [INPUT_NAMES.lastName]: 'Min. 1 znak, bez spacji',
  [INPUT_NAMES.login]: '3-15 znaków - litery, cyfry oraz znaki specjalne',
  [INPUT_NAMES.password]: 'Min. 6 znaków - litery, cyfry oraz znaki specjalne',
  [INPUT_NAMES.passwordRepeat]: 'Hasła się nie zgadzają',
  [INPUT_NAMES.email]: 'Nieprawidłowy format adresu email',
  [INPUT_NAMES.phone]: 'Mieprawidłowy format numeru telefonu',
  [INPUT_NAMES.address]: 'Nieprawidłowy format adresu',
};

export default INPUT_ERRORS;
