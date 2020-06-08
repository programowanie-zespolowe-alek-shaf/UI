import { makeStyles } from '@material-ui/core/styles';

const useAdminPanelLinkStyles = makeStyles((theme) => ({
  container: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: 'white',
    textTransform: 'uppercase',
  },
}));

export default useAdminPanelLinkStyles;
