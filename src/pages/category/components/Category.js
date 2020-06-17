import React, { useState } from 'react';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from 'components/grid/Grid';
import BookCard from 'components/bookCard/BookCard';
import { CATEGORY_PAGE } from 'global/constants/pages';

import {
  Typography,
  Box,
  Button,
  Select,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  FormControlLabel,
} from '@material-ui/core';
import useCategoryStyles from './CategoryStyles';

const selectInputOptions = [
  {
    name: 'Data dodania',
    value: 'dateAdded',
  },
  {
    name: 'Tytuł',
    value: 'title',
  },
  {
    name: 'Autor',
    value: 'author',
  },
  {
    name: 'Rok premiery',
    value: 'year',
  },
  {
    name: 'Cena',
    value: 'price',
  },
  {
    name: 'Liczba stron',
    value: 'numPages',
  },
];

const Category = ({ items, name }) => {
  const classes = useCategoryStyles();

  let location = useLocation();
  let queryParams = new URLSearchParams(location.search);
  let sortParam = queryParams.get('sort');
  let orderParam = 'desc';
  if (sortParam.endsWith('asc')) {
    orderParam = 'asc';
  }
  let featuredParam = queryParams.get('recommended');
  if (featuredParam === 'true') {
    featuredParam = true;
  }
  if (featuredParam === 'false') {
    featuredParam = false;
  }

  const [sortMode, setSortMode] = useState(
    sortParam.substring(0, sortParam.indexOf(';')) || 'dateAdded'
  );
  const [featured, setFeatured] = useState(featuredParam || false);
  const [order, setOrder] = useState(orderParam);
  const history = useHistory();
  const { categoryId } = useParams();

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name === 'sort') {
      setSortMode(value);
    }
    if (name === 'order') {
      setOrder(value);
    }
  };

  const onChangeCheckbox = (e) => {
    const { checked } = e.target;
    setFeatured(checked);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    history.push(
      `${CATEGORY_PAGE}/${categoryId}?sort=${sortMode};${order}${
        featured ? `&recommended=${featured}` : ''
      }`
    );
  };

  return (
    <React.Fragment>
      <Typography variant='h6'>{name}</Typography>
      <Box
        component='form'
        display='flex'
        justifyContent='start'
        alignItems='center'
        mt={2}
        mb={3}
        onSubmit={onSubmit}
      >
        <FormControl className={classes.sort}>
          <InputLabel id={'select-filtering'}>Sortuj według</InputLabel>
          <Select
            labelId='select-filtering'
            name='sort'
            id='sort'
            value={sortMode}
            onChange={onChange}
          >
            {selectInputOptions.map((option, index) => {
              return (
                <MenuItem
                  key={`select-${option.name}-option-${index}`}
                  value={option.value}
                >
                  {option.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl className={classes.order}>
          <InputLabel id={'select-filtering'}>Kierunek</InputLabel>
          <Select
            labelId='select-order'
            name='order'
            id='order'
            value={order}
            onChange={onChange}
          >
            <MenuItem value='desc'>Malejąco</MenuItem>
            <MenuItem value='asc'>Rosnąco</MenuItem>
          </Select>
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              onChange={onChangeCheckbox}
              name='featured'
              checked={featured}
            />
          }
          className={classes.featured}
          label='Polecane'
        />
        <Button
          size='small'
          color='primary'
          variant='outlined'
          type='submit'
          className={classes.button}
        >
          Filtruj
        </Button>
      </Box>
      <Grid>
        {items.map((book, index) => {
          return (
            <BookCard
              key={`book-card-main-${index}`}
              id={book.id}
              title={book.title}
              author={book.author}
              year={book.year}
              photoUrl={book.photoUrl}
              description={book.description}
              price={book.price}
              available={book.available}
            />
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Category;
