import React, { forwardRef } from 'react';
import classNames from 'classnames';

/**
 * AppButton 컴포넌트
 */
const AppButton = (
  { as, content, children, className, label, ...restProps },
  ref
) => {
  // 클래스 속성 병합
  const combineClassNames = classNames('resetButton', className);

  // 렌더링
  return as === 'a' ? (
    <a
      ref={ref}
      role="button"
      title={label || null}
      aria-label={label || null}
      className={className}
      {...restProps}
    >
      {children || content}
    </a>
  ) : (
    <button
      ref={ref}
      type="button"
      title={label || null}
      aria-label={label || null}
      className={combineClassNames}
      {...restProps}
    >
      {children || content}
    </button>
  );
};

export default forwardRef(AppButton);
