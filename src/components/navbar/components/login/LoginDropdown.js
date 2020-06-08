import React, { useState } from 'react';
import { LOGIN_PAGE, REGISTER_PAGE } from 'global/constants/pages';

import {
  Menu,
  IconButton,
  Typography,
  ListSubheader,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

import MenuItemLink from 'components/menuItemLink/MenuItemLink';

import useLoginStyles from './LoginStyles';

const LoginDropdown = () => {
  const classes = useLoginStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <IconButton
        size='small'
        className={classes.iconButton}
        aria-controls='login-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <PersonIcon className={classes.icon} />
      </IconButton>
      <Menu
        id='login-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItemLink onClick={handleClose} to={LOGIN_PAGE}>
          <Typography align='center'>Zaloguj się</Typography>
        </MenuItemLink>
        <ListSubheader>
          <Typography align='center'>lub</Typography>
        </ListSubheader>
        <MenuItemLink onClick={handleClose} to={REGISTER_PAGE}>
          <Typography align='center'>Załóż konto</Typography>
        </MenuItemLink>
      </Menu>
    </React.Fragment>
  );
};

export default LoginDropdown;
