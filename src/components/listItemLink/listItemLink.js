import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem } from '@material-ui/core';

const ListItemLink = React.forwardRef((props, ref) => (
  <ListItem ref={ref} component={Link} {...props} />
));
ListItemLink.displayName = 'ListItemLink';

export default ListItemLink;
