import React from 'react';

import AppHomeLink from '@components/AppHomeLink/AppHomeLink';
import A11yHidden from '@components/A11yHidden/A11yHidden';
import AppNavigation from '@components/AppNavigation/AppNavigation';
import styled from 'styled-components';

// 스타일 컴포넌트
const StyledHeader = styled.header`
  position: fixed;
  z-index: 600;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.4);
  margin-bottom: 30px;
  border-bottom: 1px solid #e0e0e0;

  .animate & {
    /* 0% */
    opacity: 0;
    transform: translateY(-4rem);
    /* 100% */
    animation: transform-none 0.35s 0.4s ease-out forwards;
  }
`;

/**
 * AppHeader 컴포넌트
 */
const AppHeader = () => {
  return (
    <StyledHeader>
      <AppHomeLink href="/" title="이디야 커피 홈">
        <A11yHidden lang="en">EDIYA COFFEE</A11yHidden>
      </AppHomeLink>
      <AppNavigation />
    </StyledHeader>
  );
};

export default AppHeader;
