import React, { Component, Fragment } from 'react';
import AppContext from '~/context/AppContext';

export default class AppNavigation extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ navigation: { title, items } }) => (
          <Fragment>
            <button
              type="button"
              className="resetButton button button__open"
              title="메뉴 열기"
              aria-label="메뉴 열기"
            >
              <span className="ir" />
            </button>
            <nav className="appNavigation" hidden>
              <h2 className="a11yHidden">{title}</h2>
              <ul className="resetList">
                {items.map((item, index) => (
                  <li key={`appNav-${index}`}>
                    <a href={item.link}>{item.text}</a>
                  </li>
                ))}
              </ul>
              <button
                className="resetButton button button__close"
                type="button"
                title="메뉴 닫기"
                aria-label="메뉴 닫기"
              >
                <span className="close" aria-hidden="true">
                  ×
                </span>
              </button>
            </nav>
          </Fragment>
        )}
      </AppContext.Consumer>
    );
  }
}
