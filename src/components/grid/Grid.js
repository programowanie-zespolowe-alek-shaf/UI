import React from 'react';
import PropTypes from 'prop-types';
import useGridStyles from './GridStyles';

const Grid = ({ children }) => {
  const classes = useGridStyles();

  return (
    <div className={classes.container}>
      {children.length > 0
        ? children.map((child, index) => {
            return (
              <div
                key={`grid-item-${index}`}
                style={{ gridColumnEnd: 'span 1' }}
              >
                {child}
              </div>
            );
          })
        : 'Brak wyników'}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
