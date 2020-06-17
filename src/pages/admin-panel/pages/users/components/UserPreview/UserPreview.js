import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TableCell, ButtonGroup, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import useAdminPanelStyles from '../../../../AdminPanelStyles';

const UserPreview = ({ user, onUserDelete }) => {
  const classes = useAdminPanelStyles();

  return (
    <React.Fragment>
      <TableCell align='center'>{user.username}</TableCell>
      <TableCell align='center'>{user.firstName}</TableCell>
      <TableCell align='center'>{user.lastName}</TableCell>
      <TableCell align='center'>{user.email}</TableCell>
      <TableCell align='center'>{user.phone}</TableCell>
      <TableCell align='center'>
        {user.roles.map((role, index) => {
          if (role === 'ROLE_USER') {
            return (
              <span key={`admin-user-${role}-role`}>
                Użytkownik{user.roles.length > 1 ? ', ' : null}
              </span>
            );
          } else if (role === 'ROLE_ADMIN') {
            return <span key={`admin-user-${index}-role`}>Admin</span>;
          }
        })}
      </TableCell>
      <TableCell align='center'>
        <ButtonGroup
          variant='text'
          aria-label='text primary button group'
          size='small'
        >
          <Button>
            <Link
              to={`/admin/user/${user.username}`}
              className={classes.linkButton}
            >
              <MoreHorizIcon color='action' />
            </Link>
          </Button>
          <Button>
            <Link
              to={`/admin/user/${user.username}/edit`}
              className={classes.linkButton}
            >
              <EditIcon color='action' />
            </Link>
          </Button>
          <Button>
            <DeleteIcon
              color='action'
              onClick={() => onUserDelete(user.username)}
            />
          </Button>
        </ButtonGroup>
      </TableCell>
    </React.Fragment>
  );
};

UserPreview.propTypes = {
  user: PropTypes.object,
};

export default UserPreview;
