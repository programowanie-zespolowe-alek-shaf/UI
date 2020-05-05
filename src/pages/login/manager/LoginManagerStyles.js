import { makeStyles } from '@material-ui/core/styles';

const useLoginManagerStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexFlow: 'column',
    width: '100%',
    height: '80%',
  },
  title: {
    marginBottom: theme.spacing(1),
  },
  form: {
    maxWidth: 400,
  },
  submit: {
    marginTop: theme.spacing(3),
  },
  spinner: {
    color: 'white',
  },
}));

export default useLoginManagerStyles;
