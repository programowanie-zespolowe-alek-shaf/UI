import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';
import Cart from './components/cart/Cart';

import { AppBar, Toolbar } from '@material-ui/core';

import Logo from './components/logo/Logo';
import Search from './components/search/Search';
import Login from './components/login/Login';

const Navbar = () => {
  const user = useSelector((store) => store.login, shallowEqual);
  const categories = useSelector((store) => store.categories, shallowEqual);

  return (
    <AppBar position='static'>
      <Toolbar>
        <Logo />
        <Search items={categories.items} />
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
