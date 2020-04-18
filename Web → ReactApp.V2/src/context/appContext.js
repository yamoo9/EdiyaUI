import { createContext } from 'react';

const initValue = {
  navigation: {},
  beverageList: [],
};

export default createContext(initValue);
