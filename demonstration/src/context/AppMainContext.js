import { createContext } from 'react';
import { beverage_menu } from '@api/ediya.json';

export const beverageData = [
  ...beverage_menu,
];
export default createContext(beverageData);
