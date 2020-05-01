import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { List, ListItemText, ListSubheader } from '@material-ui/core';
import ListItemLink from 'components/listItemLink/listItemLink';
import categories from 'global/constants/categories';
import { CATEGORY_PAGE } from 'global/constants/pages';

const Sidebar = () => {
  return (
    <List>
      <ListSubheader>Kategorie</ListSubheader>
      {categories.map((item) => {
        return (
          <ListItemLink key={uuidv4()} to={`${CATEGORY_PAGE}/${item.slug}`}>
            <ListItemText>{item.name}</ListItemText>
          </ListItemLink>
        );
      })}
    </List>
  );
};

export default Sidebar;
