import React, { useState, useEffect, useCallback } from 'react';
import AppContext from '@context/appContext';
import AppHeader from '@components/AppHeader/StyledAppHeader';
import AppMain from '@components/AppMain/AppMain';
import GoToTop from '@components/GoToTop/GoToTop';

/**
 * App 컴포넌트
 */
function App() {
  // 상태, useState 훅
  const [ navigation, setNavigation ] = useState({});
  const [ beverageList, setBeverageList ] = useState([]);

  // 핸들러
  const fetchData = useCallback(async () => {
    const response = await fetch(process.env.REACT_APP_FB_API);
    const { navigation, beverageList } = await response.json();
    setNavigation(navigation);
    setBeverageList(beverageList);
  }, []);

  // 라이프 사이클 훅 useEffect 훅
  useEffect(() => {
    fetchData();
  }, []);

  const value = {
    navigation,
    beverageList,
  };

  return (
    <AppContext.Provider value={value}>
      <AppHeader />
      <AppMain />
      <GoToTop />
    </AppContext.Provider>
  );
}

export default App;
