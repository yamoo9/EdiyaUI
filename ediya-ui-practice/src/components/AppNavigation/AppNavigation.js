import './AppNavigation.scss';
import React, { useContext } from 'react';
import AppContext from '~/context/AppContext';
import AppButton from '../AppButton/AppButton';
import A11yHidden from '../A11yHidden/A11yHidden';
import { forwardRef } from 'react';

const AppNavigation = ({ open = false, handleCloseNav = () => {} }, navRef) => {
  const { navigation: { title, items } } = useContext(AppContext);

  return (
    <nav ref={navRef} hidden={!open} className="appNavigation">
      <A11yHidden as="h2">{title}</A11yHidden>
      <ul className="resetList">
        {items.map((item, index) => (
          <li key={`appNav-${index}`}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
      <AppButton
        className="button button__close"
        title="메뉴 닫기"
        aria-label="메뉴 닫기"
        onClick={handleCloseNav}
      >
        <span className="close" aria-hidden="true">
          ×
        </span>
      </AppButton>
    </nav>
  );
};

AppNavigation.displayName = 'AppNavigation';

export default forwardRef(AppNavigation);
