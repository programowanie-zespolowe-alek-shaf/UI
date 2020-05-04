import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { MAIN_PAGE } from '../../../../global/constants/pages';

import { Typography, Link } from '@material-ui/core';

const Logo = () => (
  <Link to={MAIN_PAGE} component={RouterLink} color='inherit' underline='none'>
    <Typography variant='h6'>BookStore</Typography>
  </Link>
);

export default Logo;
