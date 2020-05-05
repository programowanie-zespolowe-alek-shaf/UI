import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { logoutAction } from '../../../../pages/login/actions/loginActions';
import { PROFILE_PAGE } from 'global/constants/pages';

import {
  MenuItem,
  Menu,
  IconButton,
  Avatar,
  Typography,
  Divider,
} from '@material-ui/core';

import MenuItemLink from 'components/menuItemLink/MenuItemLink';

import useLoginStyles from './LoginStyles';

const AvatarDropdown = () => {
  const classes = useLoginStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const userName = useSelector((state) => state.login.userName, shallowEqual);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logoutAction());
    handleClose();
  };

  return (
    <React.Fragment>
      <IconButton
        size='small'
        className={classes.iconButton}
        aria-controls='avatar-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <Avatar className={classes.avatar}>
          {userName && userName.charAt(0).toUpperCase()}
        </Avatar>
      </IconButton>
      <Menu
        id='avatar-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItemLink onClick={handleClose} to={PROFILE_PAGE}>
          <Typography align='center'>Mój profil</Typography>
        </MenuItemLink>
        <Divider />
        <MenuItem onClick={logOut}>
          <Typography align='center'>Wyloguj się</Typography>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default AvatarDropdown;
