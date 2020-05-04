import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import useLoginStyles from './LoginStyles';
import PersonIcon from '@material-ui/icons/Person';

const LoginIcon = () => {
  const classes = useLoginStyles();

  return (
    <IconButton size='small' className={classes.iconButton}>
      <PersonIcon className={classes.icon} />
    </IconButton>
  );
};

export default LoginIcon;
