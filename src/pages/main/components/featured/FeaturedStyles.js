import { makeStyles } from '@material-ui/core/styles';

const useFeaturedStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  grid: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(1),
  },
  root: {
    display: 'flex',
    width: '32%',
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
    width: '100%',
  },
  description: {
    marginTop: theme.spacing(1),
  },
  price: {
    marginTop: theme.spacing(1),
  },
  addToCart: {
    marginTop: 'auto',
  },
}));

export default useFeaturedStyles;
