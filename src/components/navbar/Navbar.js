import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import globalMessages from '../../global/messages/globalMessages';
import { logoutAction } from '../../pages/login/actions/loginActions';

import { AppBar, Toolbar } from '@material-ui/core';

import Logo from 'components/logo/Logo';
import Search from 'components/search/Search';

const Navbar = () => {
  const user = useSelector((store) => store.login, shallowEqual);
  // const dispatch = useDispatch();

  return (
    <AppBar position='static'>
      <Toolbar>
        <Logo />
        <Search />
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      to: PropTypes.string,
    })
  ),
};

export default Navbar;
