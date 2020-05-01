import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { List, ListItemText, ListSubheader } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { compose, typography } from '@material-ui/system';
import ListItemLink from 'components/listItemLink/listItemLink';
import categories from 'global/constants/categories';
import { CATEGORY_PAGE } from 'global/constants/pages';

const ListItemTextContainer = styled(ListItemText)(compose(typography));

const Sidebar = () => {
  return (
    <List>
      <ListSubheader>Kategorie</ListSubheader>
      {categories.map((item) => {
        return (
          <ListItemLink key={uuidv4()} to={`${CATEGORY_PAGE}/${item.slug}`}>
            <ListItemTextContainer htmlFontSize={10} fontSize={16}>
              {item.name}
            </ListItemTextContainer>
          </ListItemLink>
        );
      })}
    </List>
  );
};

export default Sidebar;
