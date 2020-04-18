import './BeverageList.scss';
import React from 'react';
import AppContext from '@context/appContext';
import BeverageItem from '@components/BeverageItem/BeverageItem';
import AppLoading from '@components/AppLoading/AppLoading';

/**
 * BeverageList 컴포넌트
 */
class BeverageList extends React.Component {
  // 컨텍스트 참조
  static contextType = AppContext;

  render() {
    const { beverageList: items } = this.context;

    return items.length === 0 ? (
      <AppLoading
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          width: 120,
          height: 120,
          transform: 'translate(-50%, -50%)',
        }}
      />
    ) : (
      <ul className="beverageList resetList">
        {items.map((item) => <BeverageItem key={item.id} item={item} />)}
      </ul>
    );
  }
}

export default BeverageList;
