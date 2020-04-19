import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { LOGIN_PAGE, MAIN_PAGE } from "../../global/constants/pages";
import globalMessages from "../../global/messages/globalMessages";
import { logoutAction } from "../../pages/login/actions/loginActions";
import styles from "./navbar.scss";

const Navbar = () => {
  const user = useSelector((store) => store.login, shallowEqual);
  const dispatch = useDispatch();

  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <Link to={MAIN_PAGE}>BookStore</Link>
      </div>
      <div>
        <NavLink
          exact
          className={styles.inactiveLink}
          activeClassName={styles.activeLink}
          to={LOGIN_PAGE}
          onClick={() => dispatch(logoutAction(() => {}))}
        >
          <div />
          <span>
            {user.isAuthenticated
              ? globalMessages.logoutUpperCase
              : globalMessages.loginUpperCase}
          </span>
        </NavLink>
      </div>
    </div>
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
