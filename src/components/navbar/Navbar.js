import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';
import Cart from './components/cart/Cart';

import { AppBar, Toolbar } from '@material-ui/core';

import Logo from './components/logo/Logo';
import Search from './components/search/Search';
import AdminPanelLink from './components/adminPanelLink/AdminPanelLink';
import Login from './components/login/Login';

const Navbar = () => {
  const isAuthenticated = useSelector(
    (state) => state.login.isAuthenticated,
    shallowEqual
  );
  const categories = useSelector((store) => store.categories, shallowEqual);

  return (
    <AppBar position='static'>
      <Toolbar>
        <Logo />
        <Search items={categories.items} />
        {isAuthenticated ? <AdminPanelLink /> : null}
        <Login />
        <Cart />
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
