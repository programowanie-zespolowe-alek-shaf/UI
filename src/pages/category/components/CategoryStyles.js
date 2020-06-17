import { makeStyles } from '@material-ui/styles';

const useCategoryStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(1.3),
  },
  sort: {
    width: '120px',
  },
  order: {
    marginLeft: theme.spacing(3),
  },
  featured: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  button: {
    marginLeft: theme.spacing(1),
    marginTop: 'auto',
  },
}));

export default useCategoryStyles;
