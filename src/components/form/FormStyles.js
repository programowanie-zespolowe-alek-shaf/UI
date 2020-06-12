import { makeStyles } from '@material-ui/core/styles';

const useFormStyles = makeStyles((theme) => ({
  select: {
    minWidth: 150,
  },
  title: {
    marginBottom: theme.spacing(3),
  },
}));

export default useFormStyles;
