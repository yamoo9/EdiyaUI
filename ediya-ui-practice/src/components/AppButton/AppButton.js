import React, { useState, useCallback, forwardRef } from 'react';
import classNames from 'classnames';

const AppButton = (
  { children, className, onToggle = () => {}, ...buttonProps },
  buttonRef
) => {
  const [ state, setState ] = useState({
    isToggle: false,
  });

  const handleToggle = useCallback(
    () => {
      setState({
        isToggle: !state.isToggle,
      });
      onToggle(state.isToggle);
    },
    [ state.isToggle, onToggle ]
  );

  return (
    <button
      type="button"
      className={classNames('resetButton', className)}
      ref={buttonRef}
      onClick={handleToggle}
      {...buttonProps}
    >
      {children || '버튼'}
    </button>
  );
};

AppButton.displayName = 'AppButton';

export default forwardRef(AppButton);
