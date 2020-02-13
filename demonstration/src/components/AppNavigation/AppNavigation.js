import './AppNavigation.scss';
import React, { Component, Fragment, createRef } from 'react';
import UiButton from '@components/UiButton/UiButton';
import AppHeaderContext from '@context/AppHeaderContext';

/**
 * @class
 */
class AppNavigation extends Component {
  // 컨텍스트
  static contextType = AppHeaderContext;

  // 컴포넌트 상태
  state = {
    isOpen: false,
    activeClass: '',
  };

  // 참조 DOM 객체
  firstLink = createRef(null);
  closeButton = createRef(null);

  // 이벤트 핸들러
  handleOpenMenu = () => {
    this.setState(
      {
        isOpen: true,
      },
      // isOpen 상태 변경 후, 처리되는 콜백 함수
      () => {
        window.setTimeout(() => {
          this.setState({
            activeClass: 'is-active',
          });
        }, 100);
      }
    );
  };

  handleCloseMenu = () => {
    this.setState(
      {
        activeClass: '',
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

  handleKeyDownFirstLink = (e) => {
    if (e.shiftKey && e.keyCode === 9) {
      e.preventDefault();
      const { current: button } = this.closeButton;
      button.focus();
    }
  };

  handleKeyDownCloseButton = (e) => {
    if (!e.shiftKey && e.keyCode === 9) {
      e.preventDefault();
      const { current: link } = this.firstLink;
      link.focus();
    }
  };

  // 렌더링
  render() {
    const { title, items } = this.context;
    const { isOpen, activeClass } = this.state;

    return (
      <Fragment>
        <UiButton
          className="is-open-menu"
          title="메뉴 열기"
          aria-label="메뉴 열기"
          onClick={this.handleOpenMenu}
        >
          <span className="ir" />
        </UiButton>

        <nav className={`appNavigation ${activeClass}`.trim()} hidden={!isOpen}>
          <h2 className="a11yHidden">{title}</h2>
          <ul className="resetList">
            {items.map(({ link, text }, i) => (
              <li key={text}>
                <a
                  ref={i === 0 ? this.firstLink : null}
                  href={link}
                  onKeyDown={i === 0 ? this.handleKeyDownFirstLink : null}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
          <UiButton
            className="is-close-menu"
            title="메뉴 닫기"
            aria-label="메뉴 닫기"
            onClick={this.handleCloseMenu}
            onKeyDown={this.handleKeyDownCloseButton}
            ref={this.closeButton}
          >
            <span className="close" aria-hidden="true">
              ×
            </span>
          </UiButton>
        </nav>
      </Fragment>
    );
  }
}

export default AppNavigation;
