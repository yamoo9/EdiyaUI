import './BeverageItem.scss';
import React, { Component, createRef, Fragment } from 'react';
import UiButton from '@components/UiButton/UiButton';

class BeverageItem extends Component {
  state = {
    isExpand: false,
  };

  dialog = createRef(null);

  handleExpandDialog = (e) => {
    e.preventDefault();
    this.setState(
      {
        isExpand: true,
      },
      () => {
        window.setTimeout(() => {
          const { current: dialog } = this.dialog;
          dialog.classList.add('is-active');
        }, 100);
      }
    );
  };

  handleCollapseDialog = (e) => {
    e.preventDefault();
    const { current: dialog } = this.dialog;
    dialog.classList.remove('is-active');
    window.setTimeout(() => {
      this.setState({
        isExpand: false,
      });
    }, 400);
  };

  render() {
    const { item } = this.props;
    const { name, src, width, height } = item.figure;
    const { ko, en, desc, display_criteria: criteria } = item.detail;
    const { isExpand } = this.state;

    return (
      <li className="beverageList__item">
        <a
          className="beverageList__button"
          href="#this-is-button"
          role="button"
          aria-haspopup="true"
          aria-pressed={isExpand ? true : false}
          onClick={this.handleExpandDialog}
        >
          <figure>
            <img src={src} width={width} height={height} alt="" />
            <figcaption>{name.replace(/-/gi, ' ')}</figcaption>
          </figure>
        </a>
        <div
          hidden={isExpand ? false : true}
          ref={this.dialog}
          className="beverageList__dialog"
          role="dialog"
          aria-modal="false"
          aria-labelledby={`beverageList__dialog-${item.id}`}
        >
          <h3
            className="beverageList__dialog--name"
            id={`beverageList__dialog-${item.id}`}
          >
            {ko}
            <span lang="en">{en}</span>
          </h3>
          <p>{desc}</p>
          <div className="beverageList__dialog--multiColumn is-2">
            <dl>
              {criteria.map(([ key, value
              ], i) => (
                <Fragment key={i}>
                  <dt>{key}</dt>
                  <dd>({value})</dd>
                </Fragment>
              ))}
            </dl>
          </div>
          <UiButton
            className="is-close-dialog"
            title="음료 정보 다이얼로그 닫기"
            aria-label="음료 정보 다이얼로그 닫기"
            onClick={this.handleCollapseDialog}
          >
            <span aria-hidden="true">×</span>
          </UiButton>
        </div>
      </li>
    );
  }
}

export default BeverageItem;
