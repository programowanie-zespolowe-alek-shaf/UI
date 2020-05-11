import INPUT_NAMES from './names';

const INPUT_REGEXPS = {
  [INPUT_NAMES.firstName]: /^[^\s]{1,}$$/,
  [INPUT_NAMES.lastName]: /^[^\s]{1,}$/,
  [INPUT_NAMES.login]: /^[a-zA-Z0-9żźćńółęąśŻŹĆĄŚĘŁÓŃ#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{3,15}$/,
  [INPUT_NAMES.password]: /^[a-zA-Z0-9żźćńółęąśŻŹĆĄŚĘŁÓŃ#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{6,}$/,
  [INPUT_NAMES.email]: /^[^@\s]+@[^@\s.]+\.[^@.\s]+$/,
  [INPUT_NAMES.phone]: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$/,
  [INPUT_NAMES.address]: /^[a-zA-Z0-9!żźćńółęąśŻŹĆĄŚĘŁÓŃ"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]{1,}$/,
};

export default INPUT_REGEXPS;
