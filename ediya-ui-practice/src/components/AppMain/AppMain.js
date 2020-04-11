/* eslint-disable jsx-a11y/anchor-is-valid */
import './AppMain.scss';
import React from 'react';

const AppMain = () => {
  return (
    <main className="appMain">
      <h2 className="a11yHidden">이디야 음료</h2>
      <ul className="resetList beverageList">
        <li className="beverageList__item">
          <a
            className="beverageList__button"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-pressed="false"
          >
            <figure>
              <img
                src="./images/iced-cherry-blossoms-latte.png"
                width="323"
                height="323"
                alt=""
              />
              <figcaption>ICED 벚꽃라떼</figcaption>
            </figure>
          </a>
          <div
            className="beverageList__dialog"
            hidden
            role="dialog"
            aria-modal="false"
            aria-labelledby="beverageList__dialogLabel-1"
          >
            <h3
              className="beverageList__dialogLabel"
              id="beverageList__dialogLabel-1"
            >
              ICED 벚꽃라떼<span lang="en">Cherry Blossom Latte</span>
            </h3>
            <p>은은한 벚꽃향과 라즈베리 화이트 초콜릿 토핑이 올라간 핑크빛 라떼</p>
            <div className="beverageList__criteria is-2">
              <dl>
                <dt>칼로리</dt>
                <dd>(393kcal)</dd>
                <dt>당류</dt>
                <dd>(35g)</dd>
                <dt>단백질</dt>
                <dd>(7g)</dd>
                <dt>포화지방</dt>
                <dd>(18.6g)</dd>
                <dt>나트륨</dt>
                <dd>(149mg)</dd>
                <dt>카페인</dt>
                <dd>(0mg)</dd>
              </dl>
            </div>
            <button
              className="resetButton button button__close"
              type="button"
              title="닫기"
              aria-label="음료 정보 패널 닫기"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
        </li>

        <li className="beverageList__item">
          <a
            className="beverageList__button"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-pressed="false"
          >
            <figure>
              <img
                src="./images/hot-cherry-blossoms-latte.png"
                width="323"
                height="323"
                alt=""
              />
              <figcaption>HOT 벚꽃라떼</figcaption>
            </figure>
          </a>
          <div
            className="beverageList__dialog"
            hidden
            role="dialog"
            aria-modal="false"
            aria-labelledby="beverageList__dialogLabel-2"
          >
            <h3
              className="beverageList__dialogLabel"
              id="beverageList__dialogLabel-2"
            >
              HOT 벚꽃라떼<span lang="en">Cherry Blossom Latte</span>
            </h3>
            <p>은은한 벚꽃향과 라즈베리 화이트 초콜릿 토핑이 올라간 핑크빛 라떼</p>
            <div className="beverageList__criteria is-2">
              <dl>
                <dt>칼로리</dt>
                <dd>(430kcal)</dd>
                <dt>당류</dt>
                <dd>(38g)</dd>
                <dt>단백질</dt>
                <dd>(10g)</dd>
                <dt>포화지방</dt>
                <dd>(19.0g)</dd>
                <dt>나트륨</dt>
                <dd>(149mg)</dd>
                <dt>카페인</dt>
                <dd>(0mg)</dd>
              </dl>
            </div>
            <button
              className="resetButton button button__close"
              type="button"
              title="닫기"
              aria-label="음료 정보 패널 닫기"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default AppMain;
