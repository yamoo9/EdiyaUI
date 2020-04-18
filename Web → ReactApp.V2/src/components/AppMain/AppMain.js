import './AppMain.scss';
import React from 'react';
import A11yHidden from '@components/A11yHidden/A11yHidden';
import BeverageList from '@components/BeverageList/BeverageList';

const AppMain = () => (
  <main className="appMain">
    <A11yHidden as="h2">이디야 음료</A11yHidden>
    <BeverageList />
  </main>
);

export default AppMain;
