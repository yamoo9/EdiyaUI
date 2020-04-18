import { combineReducers } from 'redux';
import navigationReducer from '~/components/AppNavigation/navigationReducer';
import beverageMenuReducer from '~/components/BeverageList/beverageMenuReducer';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  beverageMenu: beverageMenuReducer,
});

export default rootReducer;
