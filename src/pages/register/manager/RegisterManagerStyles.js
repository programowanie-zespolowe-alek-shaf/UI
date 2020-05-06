import { makeStyles } from '@material-ui/core/styles';

const useRegisterManagerStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: 50,
    marginBottom: 50,
  },
  title: {
    marginBottom: theme.spacing(3),
  },
  form: {
    maxWidth: 400,
  },
  input: {
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(2),
  },
}));

export default useRegisterManagerStyles;
