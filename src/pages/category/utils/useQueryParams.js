const useQueryParams = (location) => {
  let queryParams = new URLSearchParams(location.search);
  let sortParam = queryParams.get('sort');
  let orderParam = 'desc';
  let featuredParam = queryParams.get('recommended');

  if (featuredParam === 'true') {
    featuredParam = true;
  }
  if (featuredParam === 'false') {
    featuredParam = false;
  }

  if (sortParam) {
    if (sortParam && sortParam.endsWith('asc')) {
      orderParam = 'asc';
    }
    sortParam = sortParam.substring(0, sortParam.indexOf(';'));
  }

  return {
    sortParam: sortParam,
    orderParam: orderParam,
    featuredParam: featuredParam,
  };
};

export default useQueryParams;
