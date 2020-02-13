import './AppHeader.scss';
import React from 'react';
import AppHomeLink from '@components/AppHomeLink/AppHomeLink';
import AppNavigation from '@components/AppNavigation/AppNavigation';

const AppHeader = () => {
  return (
    <header className="appHeader">
      {/* 홈 링크 */}
      <AppHomeLink
        href="https://www.ediya.com"
        title="홈 페이지로 이동"
        external={true}
      >
        <span className="a11yHidden" lang="en">
          EDIYA COFFEE
        </span>
      </AppHomeLink>

      {/* 내비게이션 메뉴 */}
      <AppNavigation />
    </header>
  );
};

export default AppHeader;
