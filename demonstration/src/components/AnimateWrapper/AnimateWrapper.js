import React, { Fragment } from 'react';

const AnimateWrapper = ({ animate, children }) =>
  animate ? (
    <div className="animate">{children}</div>
  ) : (
    <Fragment>{children}</Fragment>
  );

AnimateWrapper.defaultProps = {
  animate: false,
};

export default AnimateWrapper;
