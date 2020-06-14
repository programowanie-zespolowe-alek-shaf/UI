import { makeStyles } from '@material-ui/styles';
const useBookCardStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 220,
    padding: 10,
  },
  title: {
    lineHeight: '1.3',
    marginBottom: 5,
  },
  author: {
    marginBottom: 8,
  },
  actionArea: {
    display: 'flex',
    alignItems: 'flexStart',
    width: 'auto',
  },
  image: {
    height: 200,
    width: 130,
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
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginBottom: theme.spacing(2),
  },
  price: {
    marginTop: 'auto',
  },
  addToCart: {
    marginTop: '1rem',
  },
}));

export default useBookCardStyles;

