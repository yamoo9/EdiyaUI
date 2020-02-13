import { createContext } from 'react';
import { navigation } from '@api/ediya.json';

export const navigationData = { ...navigation };
export default createContext(navigationData);
