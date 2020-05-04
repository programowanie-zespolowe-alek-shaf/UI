import { makeStyles, fade } from '@material-ui/core/styles';

const useCartStyles = makeStyles((theme) => ({
  link: {
    marginLeft: theme.spacing(2),
  },
  iconButton: {
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
}));

export default useCartStyles;
