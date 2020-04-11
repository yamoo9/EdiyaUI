import React from 'react';

const contextInitialValue = {
  navigation: {},
  beverageList: [],
};

const AppContext = React.createContext(contextInitialValue);

export default AppContext;
