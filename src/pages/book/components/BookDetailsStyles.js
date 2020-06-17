import { makeStyles } from '@material-ui/styles';
const useBookDetailsStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: 10,
    maxWidth: 700,
  },
  title: {
    lineHeight: '1.3',
    marginBottom: 5,
  },
  // author: {
  //   marginBottom: 8,
  // },
  actionArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    width: 'auto',
  },
  image: {
    width: 300,
    objectFit: 'cover',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingRight: 20,
    paddingLeft: 20,
    '&:last-child': {
      paddingBottom: 10,
    },
  },
  description: {
    marginTop: theme.spacing(2),
  },
  addToCartAvailable: {
    marginTop: 'auto',
    marginLeft: 'auto',
    width: 150,
  },
  addToCartUnavailable: {
    marginTop: 'auto',
    marginLeft: 'auto',
    width: 200,
  },
}));

export default useBookDetailsStyles;
