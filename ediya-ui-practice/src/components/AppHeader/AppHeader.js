import './AppHeader.scss';
import React from 'react';
import AppHomeLink from '../AppHomeLink/AppHomeLink';
import AppNavigation from '../AppNavigation/AppNavigation';

const AppHeader = () => {
  return (
    <header className="appHeader">
      <AppHomeLink
        className="im class name"
        wrapperProps={{
          as: 'h2',
          className: 'wrapper',
        }}
      />
      <AppNavigation />
    </header>
  );
};

export default AppHeader;
