import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { List, ListItemText, ListSubheader } from '@material-ui/core';
import ListItemLink from 'components/listItemLink/listItemLink';
import { CATEGORY_PAGE } from 'global/constants/pages';

const Sidebar = (props) => {
  return (
    <List>
      <ListSubheader>{props.title}</ListSubheader>
      {props.items.map((item) => {
        return (
          <ListItemLink key={uuidv4()} to={`${CATEGORY_PAGE}/${item.id}`}>
            <ListItemText>{item.name}</ListItemText>
          </ListItemLink>
        );
      })}
    </List>
  );
};

Sidebar.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string)
};

export default Sidebar;
