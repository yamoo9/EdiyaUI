import React from 'react';

import { navigation, beverageList } from '~/api/ediyaDB.json';
import AppContext from '~/context/AppContext';

import AppHeader from '~/components/AppHeader/AppHeader';
import AppMain from '~/components/AppMain/AppMain';
import GoToTop from '~/components/GoToTop/GoToTop';

class App extends React.Component {
  state = {
    navigation,
    beverageList,
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <AppHeader />
        <AppMain />
        <GoToTop />
      </AppContext.Provider>
    );
  }
}

export default App;
