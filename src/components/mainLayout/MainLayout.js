import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import PropTypes from 'prop-types';
import Sidebar from 'components/sidebar/Sidebar';
import { CATEGORY_PAGE } from 'global/constants/pages';
import messages from '../../pages/category/messages/messages';
import useMainLayoutStyles from './MainLayoutStyles';

const MainLayout = (props) => {
  const classes = useMainLayoutStyles();

  const categories = useSelector((state) => state.categories, shallowEqual);
  return (
    <div className={classes.container}>
      <Sidebar
        items={categories.items}
        title={messages.kategorie}
        baseItemUrl={CATEGORY_PAGE}
      />
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
