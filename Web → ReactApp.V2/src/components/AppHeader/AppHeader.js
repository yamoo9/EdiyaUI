import './AppHeader.scss';
import React from 'react';

import AppHomeLink from '@components/AppHomeLink/AppHomeLink';
import A11yHidden from '@components/A11yHidden/A11yHidden';
import AppNavigation from '@components/AppNavigation/AppNavigation';

/**
 * AppHeader 컴포넌트
 */
const AppHeader = () => {
  return (
    <header className="appHeader">
      <AppHomeLink href="/" title="이디야 커피 홈">
        <A11yHidden lang="en">EDIYA COFFEE</A11yHidden>
      </AppHomeLink>
      <AppNavigation />
    </header>
  );
};

export default AppHeader;
