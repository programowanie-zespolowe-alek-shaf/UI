import React, { useEffect, useState } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import Category from './components/Category';
import { MAIN_PAGE } from 'global/constants/pages';
import MainLayout from 'components/mainLayout/MainLayout';
import { CATEGORY_PAGE } from 'global/constants/pages';
import { api } from 'global/connection/backend/endpoints';
import itemsPerPage from 'global/constants/itemsPerPage';
import useQueryParams from './utils/useQueryParams';

import WithPagination from 'components/withPagination/WithPagination';

const CategoryWithPagination = WithPagination(Category);

const CategoryContainer = () => {
  const [categoryName, setCategoryName] = useState('');
  const { categoryId } = useParams();
  const categories = useSelector((state) => state.categories, shallowEqual);
  const history = useHistory();
  const queryParams = useQueryParams(useLocation());

  useEffect(() => {
    if (!categoryId) {
      history.push(MAIN_PAGE);
    }
  }, [categoryId]);

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

  const fetchBaseUrl = `${api.books}?category=${categoryId}&`;
  const clientBaseUrl = `${CATEGORY_PAGE}/${categoryId}`;

  return (
    <MainLayout key='category'>
      <CategoryWithPagination
        name={categoryName}
        fetchBaseUrl={fetchBaseUrl}
        clientBaseUrl={clientBaseUrl}
        itemsPerPage={itemsPerPage.CATEGORY}
        sort={queryParams.sortParam || 'dateAdded'}
        sortOrder={queryParams.orderParam || 'desc'}
        additionalParametres={
          queryParams.featuredParam ? `recommended=${true}` : false
        }
      />
    </MainLayout>
  );
};

export default CategoryContainer;
