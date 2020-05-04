import { makeStyles, fade } from '@material-ui/core/styles';

const useLoginStyles = makeStyles((theme) => ({
  container: {
    marginLeft: 'auto',
  },
  iconButton: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    padding: 0,
    backgroundColor: 'white',
    cursor: 'pointer',
    overflow: 'visible',
    '&:hover': {
      backgroundColor: fade('#FFFFFF', 0.75),
    },
  },
  icon: {
    color: '#606060',
  },
  avatar: {
    backgroundColor: 'orange',
    '&:hover': {
      backgroundColor: fade('#FFA500', 0.75),
    },
  },
}));

export default useLoginStyles;
