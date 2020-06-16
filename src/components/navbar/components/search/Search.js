import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SEARCH_PAGE } from 'global/constants/pages';
import { useHistory } from 'react-router-dom';

import {
  Select,
  InputBase,
  FormControl,
  FormGroup,
  MenuItem,
  Button,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useSearchStyles from './SearchStyles';

const Search = (props) => {
  const classes = useSearchStyles();
  const [phrase, setPhrase] = useState('');
  const [category, setCategory] = useState('');
  const history = useHistory();

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phrases') {
      setPhrase(value);
    }
    if (name === 'category') {
      setCategory(value);
    }
  };

  const onSearch = () => {
    if (phrase !== '') {
      history.push(
        `${SEARCH_PAGE}/?phrases=${phrase}${
          category !== '' ? `&category=${category}` : ''
        }`
      );
    }
  };

  return (
    <div className={classes.search}>
      <FormGroup row>
        <FormControl>
          <InputBase
            value={phrase}
            name='phrases'
            onChange={onChange}
            placeholder='Tytuł, autor...'
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
            <MenuItem value=''>Wszystkie</MenuItem>
            {props.items.map((category) => (
              <MenuItem key={uuidv4()} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <Button
            size='small'
            endIcon={<SearchIcon />}
            classes={{
              root: classes.searchButtonRoot,
              button: classes.searchButton,
            }}
            onClick={onSearch}
          >
            Szukaj
          </Button>
        </FormControl>
      </FormGroup>
    </div>
  );
};

export default Search;
