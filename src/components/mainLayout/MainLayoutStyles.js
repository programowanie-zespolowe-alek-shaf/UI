import { makeStyles } from '@material-ui/styles';

const useMainLayoutStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  content: {
    margin: '3rem',
    width: '100%',
  },
}));

export default useMainLayoutStyles;
