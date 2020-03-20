import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './textWithEllipsis.scss';

const WithEllipsis = (props) => {
  const showRefsOverflowTooltip = (tooltipText) => (e) => {
    if (e !== null) {
      if (e.clientWidth < e.scrollWidth) e.setAttribute('title', tooltipText);
      else e.setAttribute('title', '');
    }
  };

  const stylesToApply = props.multiline ?
    (styles.ellipsisMultiline) :
    (styles.ellipsis);

  return (
    <div ref={showRefsOverflowTooltip(props.text)} className={cx(stylesToApply, props.className)}>
      {props.text}
    </div>
  );
};

WithEllipsis.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  multiline: PropTypes.bool,
};

export default WithEllipsis;
