import { makeStyles, fade } from '@material-ui/core/styles';

const useCartStyles = makeStyles((theme) => ({
  iconButton: {
    marginLeft: theme.spacing(2),
    width: theme.spacing(5),
    height: theme.spacing(5),
    backgroundColor: 'orange',
    cursor: 'pointer',
    overflow: 'visible',
    '&:hover': {
      backgroundColor: fade('#FFA500', 0.85),
    },
  },
  icon: {
    color: 'white',
  },
  button: {
    width: '100%',
  },
  iconInButton: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  cartLink: {
    width: '100%',
  },
  menuPadding: {
    padding: theme.spacing(2),
  },
  cartItemCardRoot: {
    display: 'flex',
    marginBottom: theme.spacing(2),
  },
  cartItemCardActionArea: {
    display: 'flex',
    alignItems: 'flexStart',
    width: 'auto',
  },
  cartItemCardImage: {
    height: 100,
    width: 80,
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

export default useCartStyles;
