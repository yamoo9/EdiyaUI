import './BeverageItem.scss';
import React, { Component, Fragment } from 'react';
import AppButton from '@components/AppButton/AppButton';

/**
 * BeverageItem 컴포넌트
 */
class BeverageItem extends Component {
  // 상태
  state = {
    isPressed: false,
    dialogClassName: 'beverageList__dialog',
  };

  // 메서드
  handleShowDialog = (e) => {
    e.preventDefault();
    this.setState({
      isPressed: true,
    });
    window.setTimeout(() => {
      this.setState(({ dialogClassName }) => ({
        dialogClassName: `${dialogClassName} is-active`,
      }));
    }, 100);
  };
  handleHideDialog = () => {
    this.setState({
      dialogClassName: 'beverageList__dialog',
    });
    window.setTimeout(
      () =>
        this.setState({
          isPressed: false,
        }),
      400
    );
  };

  // 렌더링
  render() {
    // 전달 속성(props) item 구조 분해 할당
    const {
      id,
      image: { name, width, height, src },
      dialog: { ko, en, desc, criteria },
    } = this.props.item;

    // 다이얼로그 ID
    const uniqueId = `beverageList__dialog-${id}`;

    return (
      <li className="beverageList__item">
        <AppButton
          className="beverageList__button"
          as="a"
          href="#"
          aria-haspopup="true"
          aria-pressed={this.state.isPressed}
          onClick={this.handleShowDialog}
        >
          <figure>
            <img src={src} width={width} height={height} alt="" />
            <figcaption>{name}</figcaption>
          </figure>
        </AppButton>
        <div
          className={this.state.dialogClassName}
          hidden={!this.state.isPressed}
          role="dialog"
          aria-modal="false"
          aria-labelledby={uniqueId}
        >
          <h3 className="beverageList__dialog--name" id={uniqueId}>
            {ko}
            <span lang="en">{en}</span>
          </h3>
          <p>{desc}</p>
          <div className="beverageList__dialog--multiColumn is-2">
            <dl>
              {criteria.map(([ dt, dd ], index) => (
                <Fragment key={index}>
                  <dt>{dt}</dt>
                  <dd>({dd})</dd>
                </Fragment>
              ))}
            </dl>
          </div>
          <button
            className="resetButton is-close-dialog"
            type="button"
            title="닫기"
            aria-label="음료 정보 패널 닫기"
            onClick={this.handleHideDialog}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </li>
    );
  }
}

export default BeverageItem;
