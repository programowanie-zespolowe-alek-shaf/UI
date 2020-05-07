import { makeStyles } from '@material-ui/core/styles';

const useWithLoadingStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
}));

export default useWithLoadingStyles;
