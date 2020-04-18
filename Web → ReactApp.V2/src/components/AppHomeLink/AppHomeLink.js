import './AppHomeLink.scss';
import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';
import A11yHidden from '@components/A11yHidden/A11yHidden';

/**
 * AppHomeLink 컴포넌트
 */
const AppHomeLink = ({
  external,
  children,
  className,
  wrapperProps: { as, className: wrapperClassName, ...restWrapperProps },
  ...linkProps
}) => {
  // as 컴포넌트 설정
  const WrapperComponent = as || AppHomeLink.defaultProps.wrapperProps.as;

  // 링크 요소 클래스 병합
  const combineClassNames = classNames('appHeader__homeLink', className);
  // 래퍼 요소 클래스 병합
  const combineWrapperClassNames = classNames(
    'appHeader__brand',
    wrapperClassName
  );

  // 렌더링
  return (
    <WrapperComponent
      {...restWrapperProps}
      className={combineWrapperClassNames}
    >
      <a
        {...linkProps}
        className={combineClassNames}
        target={external ? '_blank' : null}
        rel={external ? 'noopener noreferrer' : null}
      >
        {children || <A11yHidden>홈 링크</A11yHidden>}
      </a>
    </WrapperComponent>
  );
};

AppHomeLink.propTypes = {
  href: string.isRequired,
};

AppHomeLink.defaultProps = {
  wrapperProps: {
    as: 'h1',
  },
};

export default AppHomeLink;
