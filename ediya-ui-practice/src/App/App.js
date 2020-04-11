import React from 'react';
import AppHeader from '~/components/AppHeader/AppHeader';
import AppMain from '~/components/AppMain/AppMain';
import GoToTop from '~/components/GoToTop/GoToTop';
import AppContext from '~/context/AppContext';
import { navigation, beverageList } from '~/api/ediyaDB.json';

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
