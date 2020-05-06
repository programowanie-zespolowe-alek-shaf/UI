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
  featuredCardRoot: {
    display: 'flex',
    width: '32%',
  },
  cartItemCardActionArea: {
    display: 'flex',
    alignItems: 'flexStart',
    width: 'auto',
  },
  cartItemCardImage: {
    height: 250,
    width: 180,
  },
  cartItemCardContentRoot: {
    fontSize: '10',
    padding: theme.spacing(1),
  },
  cartItemCardTitle: {
    marginBottom: 0,
  },
  cartItemCardActions: {
    marginLeft: 'auto',
  },
  cartItemCardDeleteButton: {
    marginTop: 'auto',
  },
  cartTotalPrice: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(-1),
    marginBottom: theme.spacing(1),
  },
}));

export default useFeaturedStyles;
