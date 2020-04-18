import styles from './AppHeader.module.scss';
import React, { useRef, useReducer, useCallback } from 'react';
import AppHomeLink from '../AppHomeLink/AppHomeLink';
import AppNavigation from '../AppNavigation/AppNavigation';
import A11yHidden from '../A11yHidden/A11yHidden';
import AppButton from '../AppButton/AppButton';

console.log(styles); // { appHeader }

function reducer(state, action) {
  switch (action.type) {
    case 'open':
      return {
        isOpen: true,
      };
    case 'close':
      return {
        isOpen: false,
      };
    default:
  }
  return state;
}

const AppHeader = () => {
  const navRef = useRef(null);

  const [ state, dispatch ] = useReducer(reducer, {
    isOpen: false,
  });

  const openNav = useCallback(() => {
    dispatch({ type: 'open' });
    window.setTimeout(() => {
      navRef.current.classList.add('is-active');
    }, 100);
  }, []);

  const closeNav = useCallback(() => {
    navRef.current.classList.remove('is-active');
    window.setTimeout(() => {
      dispatch({ type: 'close' });
    }, 400);
  }, []);

  return (
    <header className="appHeader">
      <AppHomeLink>
        <A11yHidden lang="en">EDIYA COFFEE</A11yHidden>
      </AppHomeLink>
      <AppButton
        className="button button__open"
        title="메뉴 열기"
        aria-label="메뉴 열기"
        onClick={openNav}
      >
        <span className="ir" />
      </AppButton>
      <AppNavigation
        ref={navRef}
        open={state.isOpen}
        handleCloseNav={closeNav}
      />
    </header>
  );
};

export default AppHeader;
