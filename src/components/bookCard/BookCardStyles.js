import { makeStyles } from '@material-ui/styles';
const useBookCardStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  actionArea: {
    display: 'flex',
    alignItems: 'flexStart',
    width: 'auto',
  },
  image: {
    height: 250,
    width: 180,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: '220px',
    width: '100%',
  },
  description: {
    overflow: 'hidden',
    marginTop: theme.spacing(0.3),
    marginBottom: theme.spacing(1),
  },
  price: {
    marginTop: 'auto',
  },
  addToCart: {
    marginTop: '1rem',
  },
}));

export default useBookCardStyles;
