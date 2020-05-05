import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '@material-ui/core';

const MenuItemLink = React.forwardRef((props, ref) => (
  <MenuItem ref={ref} button component={Link} {...props} />
));
MenuItemLink.displayName = 'MenuItemLink';

export default MenuItemLink;
