import { makeStyles } from '@material-ui/core/styles';

const useAdminPanelStyles = makeStyles((theme) => ({
  content: {
    margin: theme.spacing(3),
    width: '100%',
  },
  title: {
    marginRight: theme.spacing(3),
  },
  header: {
    marginBottom: theme.spacing(3),
  },
  container: {
    display: 'flex',
  },
  editButton: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export default useAdminPanelStyles;
