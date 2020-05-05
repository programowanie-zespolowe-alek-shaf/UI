import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    htmlFontSize: 10,
    h1: {
      fontSize: 96,
    },
    h2: {
      fontSize: 60,
    },
    h3: {
      fontSize: 48,
    },
    h4: {
      fontSize: 34,
    },
    h5: {
      fontSize: 24,
    },
    h6: {
      fontSize: 20,
    },
    p: {
      fontSize: 16,
    },
    button: {
      fontSize: 10,
    },
    span: {
      fontSize: 14,
    },
    a: {
      fontSize: 16,
    },
    caption: {
      fontSize: 12,
    },
    subtitle1: {
      fontSize: 16,
    },
    subtitle2: {
      fontSize: 14,
    },
    // Dla każdej font family te wartości są inne
    // https://material.io/design/typography/the-type-system.html#type-scale
    // Caption : fontSize: 12
    // Overline: fontSize: 12
    // SubTitle1: fontSize: 16
    // SubTitle2: fontSize 14
  },
});
export default theme;
