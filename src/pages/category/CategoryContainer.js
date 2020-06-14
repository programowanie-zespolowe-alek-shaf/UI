import React, { useReducer, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import WithLoading from 'components/withLoading/WithLoading';
import Category from './components/Category';
import {
  reducer,
  initialState,
  getCategoryPage,
} from './slice/categorySlice.js';
import { MAIN_PAGE } from 'global/constants/pages';
import MainLayout from 'components/mainLayout/MainLayout';
import { CATEGORY_PAGE } from 'global/constants/pages';
import itemsPerPage from 'global/constants/itemsPerPage';
import PaginationBar from 'components/paginationBar/PaginationBar';

const CategoryWithLoading = WithLoading(Category);

const CategoryContainer = () => {
  const [categoryName, setCategoryName] = useState('');
  const { categoryId } = useParams();
  const { pageId } = useParams();
  const history = useHistory();
  const categories = useSelector((state) => state.categories, shallowEqual);

  const [state, dispatchLocal] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!categoryId) {
      history.push(MAIN_PAGE);
    }
    getCategoryPage(dispatchLocal, categoryId, pageId);
  }, [categoryId, pageId]);

  useEffect(() => {
    if (categories.items.length > 0) {
      const category = categories.items.find((category) => {
        return category.id === parseInt(categoryId);
      });

      if (category) {
        setCategoryName(category.name);
      } else {
        history.push(MAIN_PAGE);
      }
    }
  }, [categories.items, categoryId]);

  useEffect(() => {
    if (!state.loading && !state.error) {
      if (
        pageId > Math.ceil(state.count / itemsPerPage.CATEGORY) ||
        pageId <= 0
      ) {
        history.push(`${CATEGORY_PAGE}/${categoryId}`);
      }
    }
  }, [state.loading]);

  return (
    <MainLayout key='category'>
      <CategoryWithLoading
        isLoading={state.loading}
        count={state.count}
        books={state.books}
        error={state.error}
        name={categoryName}
      />
      <PaginationBar
        pagesCount={Math.ceil(state.count / itemsPerPage.CATEGORY)}
        baseUrl={`${CATEGORY_PAGE}/${categoryId}`}
        page={parseInt(pageId)}
      />
    </MainLayout>
  );
};

export default CategoryContainer;