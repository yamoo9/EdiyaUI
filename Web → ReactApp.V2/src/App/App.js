import React, { Component } from 'react';
import AppContext from '@context/appContext';
import AppHeader from '@components/AppHeader/AppHeader';
import AppMain from '@components/AppMain/AppMain';
import GoToTop from '@components/GoToTop/GoToTop';

/**
 * App 컴포넌트
 */
class App extends Component {
  // 상태
  state = {
    navigation: {},
    beverageList: [],
  };

  // 메서드
  // 데이터를 비동기 통신으로 패치하는 코드 로직
  fetchLocalData = () => {
    import('~/api/ediyaDB.json')
      .then(({ navigation, beverageList }) => {
        this.setState({
          navigation,
          beverageList,
        });
      })
      .catch((error) => console.error(error.message));
  };

  fetchRemotePromiseData = () => {
    // Fetch API
    fetch(process.env.REACT_APP_FB_API)
      .then((response) => response.json())
      .then(({ navigation, beverageList }) => {
        this.setState({
          navigation,
          beverageList,
        });
      })
      .catch(({ message }) => console.error(message));
  };

  fetchAsyncData = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_FB_API);
      const { navigation, beverageList } = await response.json();
      this.setState({
        navigation,
        beverageList,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  // 라이프 사이클 훅
  // Side Effect: 비동기 통신 데이터 패치
  componentDidMount() {
    this.fetchAsyncData();
  }

  // 렌더링
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
