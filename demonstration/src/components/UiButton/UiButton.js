import React, { forwardRef } from 'react';
import classNames from 'classnames';

// 포워드 참조 컴포넌트
const forwardRefComponent = (props, ref) => {
  const { className, ...domProps } = props;
  const classes = classNames('UiButton resetButton', className);
  return (
    <button ref={ref} className={classes} {...domProps}>
      {props.children || '버튼 콘텐츠를 입력하세요.'}
    </button>
  );
};

// 컴포넌트 표시 이름 설정
forwardRefComponent.displayName = 'UiButton';

// 참고: https://bit.ly/reactForwardRef
const UiButton = forwardRef(forwardRefComponent);

// 컴폰넌트 기본 값 설정
UiButton.defaultProps = {
  type: 'button',
};

export default UiButton;
