import { createContext } from 'react';

const contextInitialValue = {
  navigation: {},
  beverageList: [],
};

export default createContext(contextInitialValue);
