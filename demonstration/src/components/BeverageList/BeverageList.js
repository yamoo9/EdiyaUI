import './BeverageList.scss';
import React, { Component } from 'react';
import AppMainContext from '@context/AppMainContext';
import BeverageItem from '@components/BeverageItem/BeverageItem';

class BeverageList extends Component {
  static contextType = AppMainContext;

  render() {
    const list = this.context;
    return (
      <ul className="beverageList resetList">
        {list.map((item) => <BeverageItem key={item.id} item={item} />)}
      </ul>
    );
  }
}

export default BeverageList;
