import './AppHomeLink.scss';
import React from 'react';
import classNames from 'classnames';

const AppHomeLink = ({
  href,
  title,
  className,
  external,
  wrapperProps: {
    as: WrapperComponent,
    className: wrapperClassName,
    ...restWrapperProps
  },
  ...aNodeProps
}) => {
  const wrapperCombineClassNames = classNames(
    'homeLink__wrapper',
    wrapperClassName
  );
  const combineClassNames = classNames('homeLink__link', className);

  return (
    <WrapperComponent
      {...restWrapperProps}
      className={wrapperCombineClassNames}
    >
      <a
        {...aNodeProps}
        className={combineClassNames}
        href={href}
        title={title}
        target={external ? '_blank' : null}
        rel={external ? 'noopener noreferrer' : null}
      >
        <span className="a11yHidden" lang="en">
          EDIYA COFFEE
        </span>
      </a>
    </WrapperComponent>
  );
};

AppHomeLink.defaultProps = {
  href: '/',
  title: '홈페이지 이동',
  wrapperProps: {
    as: 'h1',
  },
};

export default AppHomeLink;
