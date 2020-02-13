import React from 'react';
import AnimateWrapper from '@components/AnimateWrapper/AnimateWrapper';
import AppHeaderContext, { navigationData } from '@context/AppHeaderContext';
import AppMainContext, { beverageData } from '@context/AppMainContext';
import AppHeader from '@components/AppHeader/AppHeader';
import AppMain from '@components/AppMain/AppMain';
import GoToTop from '@components/GoToTop/GoToTop';

const App = () => {
  return (
    <AnimateWrapper animate>
      <AppHeaderContext.Provider value={navigationData}>
        <AppHeader />
      </AppHeaderContext.Provider>
      <AppMainContext.Provider value={beverageData}>
        <AppMain />
      </AppMainContext.Provider>
      <GoToTop
        label="페이지 상단으로 이동"
        width="36"
        height="36"
        targetSelector=".beverageList"
      />
    </AnimateWrapper>
  );
};

export default App;
