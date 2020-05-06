import { makeStyles } from '@material-ui/core/styles';

const useLoginManagerStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'column',
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
  submit: {
    marginTop: theme.spacing(3),
  },
}));

export default useLoginManagerStyles;
