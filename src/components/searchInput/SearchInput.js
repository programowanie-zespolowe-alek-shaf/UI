import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = (props) => {

  return (
    <React.Fragment>
      <input type="text" onChange={props.onChange} />
    </React.Fragment>
  );
};

SearchInput.propTypes = {
  onChange: PropTypes.func,
};

export default SearchInput;
