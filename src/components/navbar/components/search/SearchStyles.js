import { fade, makeStyles } from '@material-ui/core/styles';

const useSearchStyles = makeStyles((theme) => ({
  formControl: {
    display: 'flex',
    justifyContent: 'center',
  },
  selectRoot: {
    color: 'white',
    padding: theme.spacing(0, 2),
  },
  selectIcon: {
    color: 'white',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.spacing(1),
    backgroundColor: fade(theme.palette.common.white, 0.15),
    marginRight: 'auto',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 2),
    borderRadius: theme.spacing(1, 0, 0, 1),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  textCenter: {
    textAlign: 'center',
  },
  searchButtonRoot: {
    marginLeft: theme.spacing(1),
    borderRadius: theme.spacing(0, 1, 1, 0),
    backgroundColor: fade(theme.palette.common.white, 0.25),
    color: 'white',
    height: '100%',
    padding: theme.spacing(0, 1.5, 0, 2),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.4),
      color: 'white',
    },
  },
}));

export default useSearchStyles;
