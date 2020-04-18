import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * A11yHidden 컴포넌트
 */
const A11yHidden = ({ children, className, as: Component, ...restProps }) => (
  <Component {...restProps} className={classNames('a11yHidden', className)}>
    {children}
  </Component>
);

A11yHidden.defaultProps = {
  as: 'span',
};

A11yHidden.propTypes = {
  children: PropTypes.any.isRequired,
};

export default A11yHidden;
