import './AppMain.scss';
import React from 'react';
import BeverageList from '@components/BeverageList/BeverageList';

const AppMain = () => {
  return (
    <main className="appMain">
      <h2 className="a11yHidden">이디야 음료</h2>
      <BeverageList />
    </main>
  );
};

export default AppMain;
