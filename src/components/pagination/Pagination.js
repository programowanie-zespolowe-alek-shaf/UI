import React from 'react';

const Pagination = (PageItemComponent) => {
  const wrapped = ({ pageItems, listClassName, ...otherProps }) => {
    return (
      <div className={listClassName}>
        {pageItems.map((itemData, index) => (
          <PageItemComponent key={index} data={itemData} {...otherProps} />
        ))}
      </div>
    );
  };
  return wrapped;
};

export default Pagination;
