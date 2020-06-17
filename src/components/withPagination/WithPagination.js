import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  reducer,
  initialState,
  getPaginationPage,
} from './slice/paginationSlice';
import { useParams, useHistory } from 'react-router-dom';
import withLoading from 'components/withLoading/WithLoading';
import PaginationBar from './components/paginationBar/PaginationBar';

const WithPagination = (WrappedComponent) => {
  const WrappedComponentWithLoading = withLoading(WrappedComponent);

  const wrapped = ({
    fetchBaseUrl,
    clientBaseUrl,
    afterClientBaseUrl,
    itemsPerPage,
    sort = false,
    sortOrder = 'desc',
    additionalParametres = false,
    ...otherProps
  }) => {
    const [state, dispatchLocal] = useReducer(reducer, initialState);
    const { pageId = 1 } = useParams();
    const history = useHistory();
    const firstPageUrl = `${clientBaseUrl}/1
    ${afterClientBaseUrl !== undefined ? afterClientBaseUrl : ''}
    `;

    const getPage = () =>
      getPaginationPage(
        dispatchLocal,
        fetchBaseUrl,
        parseInt(pageId),
        itemsPerPage,
        sort,
        sortOrder,
        additionalParametres
      );

    //IF PAGE NUMBER TOO SMALL
    useEffect(() => {
      if (parseInt(pageId) < 0) {
        history.push(firstPageUrl);
      } else {
        getPage();
      }
    }, [pageId, fetchBaseUrl, sort, sortOrder, additionalParametres]);

    //IF PAGE NUMBER TOO BIG
    useEffect(() => {
      if (
        state.count > 0 &&
        parseInt(pageId) > Math.ceil(state.count / itemsPerPage)
      ) {
        history.push(firstPageUrl);
      }
    });

    return (
      <React.Fragment>
        <WrappedComponentWithLoading
          isLoading={state.loading}
          error={state.error}
          items={state.items}
          updateItems={getPage}
          {...otherProps}
        />
        <PaginationBar
          pagesCount={Math.ceil(state.count / itemsPerPage)}
          baseUrl={clientBaseUrl}
          afterBaseUrl={afterClientBaseUrl}
          page={parseInt(pageId)}
        />
      </React.Fragment>
    );
  };

  wrapped.propTypes = {
    fetchBaseUrl: PropTypes.string.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    clientBaseUrl: PropTypes.string.isRequired,
    afterClientBaseUrl: PropTypes.string,
  };

  return wrapped;
};

export default WithPagination;
