import React from 'react';
import PropTypes from 'prop-types';
import {  useSelector, useDispatch, shallowEqual } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LOGIN_PAGE } from '../../global/constants/pages';
import globalMessages from '../../global/messages/globalMessages';
import { logoutAction } from '../../pages/login/actions/loginActions';
import styles from './navbar.scss';

const Navbar = (props) => {

  const user = useSelector(store => store.login, shallowEqual);
  const dispatch = useDispatch();

  const renderElements = () => {
    const { elements } = props;
    const navLinks = elements.map((element) => (
      <div key={element.name} className={styles.navItem}>
        <NavLink
          exact className={styles.inactiveLink}
          activeClassName={styles.activeLink}
          to={element.to}
        >
          <div className={styles.box} />
          <span>{element.name}</span>
        </NavLink>
      </div>
    ));
    return navLinks;
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.pageLabel} >
        <span>LIBRARY</span>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.links}>
          {renderElements()}
        </div>
        <div className={styles.authContainer}>
          <div className={styles.navItem}>
            <NavLink
              exact
              className={styles.inactiveLink}
              activeClassName={styles.activeLink}
              to={LOGIN_PAGE}
              onClick={() => dispatch(logoutAction(() => {}))}
            >
              <div className={styles.box} />
              <span>{user.isAuthenticated ? globalMessages.logoutUpperCase : globalMessages.loginUpperCase}</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>);
};

Navbar.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    to: PropTypes.string,
  })),
};

export default Navbar;
