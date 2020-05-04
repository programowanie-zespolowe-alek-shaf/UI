import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import categories from 'global/constants/categories';
import { SEARCH_PAGE } from 'global/constants/pages';

import {
  Select,
  InputBase,
  FormControl,
  FormGroup,
  MenuItem,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useSearchStyles from './SearchStyles';

//TODO: Input validation
//PropTypes
//Tests

const Search = (props) => {
  const classes = useSearchStyles();
  const [phrase, setPhrase] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (phrase !== '') {
      props.history.push(
        `${SEARCH_PAGE}?phrase=${phrase}${
          category !== '' ? `&category=${category}` : ''
        }`
      );
    }
  }, [phrase, category]);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phrase') {
      setPhrase(value);
    }
    if (name === 'category') {
      setCategory(value);
    }
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <FormGroup row>
        <FormControl>
          <InputBase
            value={phrase}
            name='phrase'
            onChange={onChange}
            placeholder='Szukaj…'
            inputProps={{ 'aria-label': 'search' }}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <Select
            value={category}
            name='category'
            onChange={onChange}
            displayEmpty
            disableUnderline
            inputProps={{ 'aria-label': 'Without label' }}
            classes={{
              root: classes.selectRoot,
              icon: classes.selectIcon,
            }}
          >
            <MenuItem value='' disabled>
              Kategoria
            </MenuItem>
            {categories.map((category) => (
              <MenuItem key={uuidv4()} value={category.slug}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </FormGroup>
    </div>
  );
};

export default withRouter(Search);
