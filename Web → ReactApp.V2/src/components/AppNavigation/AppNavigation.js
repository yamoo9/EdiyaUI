import './AppNavigation.scss';
import React, { Component, Fragment } from 'react';

import AppContext from '@context/appContext';
import AppLoading from '@components/AppLoading/AppLoading';
import AppButton from '@components/AppButton/AppButton';
import A11yHidden from '@components/A11yHidden/A11yHidden';

/**
 * AppNavigation 컴포넌트
 */
class AppNavigation extends Component {
  // 컨텍스트 참조
  static contextType = AppContext;

  // 컴포넌트 상태
  state = {
    isOpen: false,
    navigationClassName: 'appNavigation',
  };

  // 컴포넌트 메서드
  handleOpenMenu = (e) => {
    this.setState(
      {
        isOpen: true,
      },
      () => {
        window.setTimeout(() => {
          this.setState(({ navigationClassName }) => ({
            navigationClassName: `${navigationClassName} is-active`,
          }));
        }, 100);
      }
    );
  };
  handleCloseMenu = (e) => {
    this.setState(
      {
        navigationClassName: 'appNavigation',
      },
      () => {
        window.setTimeout(() => {
          this.setState({
            isOpen: false,
          });
        }, 400);
      }
    );
  };
  handleFocusCloseMenuButton = (e) => {
    if (e.shiftKey && e.keyCode === 9) {
      e.preventDefault();
      this.refs.closeButton.focus();
    }
  };
  handleFocusFirstLink = (e) => {
    if (!e.shiftKey && e.keyCode === 9) {
      e.preventDefault();
      this.refs.firstLink.focus();
    }
  };
  handleEscCloseMenu = (e) => {
    e.keyCode === 27 && this.handleCloseMenu();
  };

  shouldComponentUpdate(nextProps, { isOpen }) {
    const methodName = isOpen ? 'addEventListener' : 'removeEventListener';
    window[methodName]('keydown', this.handleEscCloseMenu);
    return true;
  }

  // 렌더링
  render() {
    // 컨텍스트 구조 분해 할당
    const { title, items } = this.context.navigation;

    return (
      <Fragment>
        <AppButton
          label="메뉴 열기"
          className="is-open-menu"
          onClick={this.handleOpenMenu}
          content={<span className="ir" />}
        />
        <nav
          className={this.state.navigationClassName}
          hidden={!this.state.isOpen}
        >
          <A11yHidden as="h2">{title || '내비게이션 타이틀'}</A11yHidden>
          {!items ? (
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
            <ul className="resetList">
              {items.map(({ link, text }, index) => (
                <li key={`${link}-${index}`}>
                  <a
                    ref={index === 0 ? 'firstLink' : null}
                    href={link}
                    onKeyDown={
                      index === 0 ? this.handleFocusCloseMenuButton : null
                    }
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          )}

          <AppButton
            label="메뉴 닫기"
            ref="closeButton"
            className="is-close-menu"
            onClick={this.handleCloseMenu}
            onKeyDown={this.handleFocusFirstLink}
          >
            <span className="close" aria-hidden="true">
              ×
            </span>
          </AppButton>
        </nav>
      </Fragment>
    );
  }
}

export default AppNavigation;
