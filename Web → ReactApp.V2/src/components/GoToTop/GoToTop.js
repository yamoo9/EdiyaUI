import './GoToTop.scss';
import React, { Component } from 'react';
import classNames from 'classnames';
import AppButton from '@components/AppButton/AppButton';

/**
 * GoToTop 컴포넌트
 */
class GoToTop extends Component {
  // 클래스 멤버
  static defaultProps = {
    changeModePosition: 100,
  };
  static handleGoToTop = () => {
    document.documentElement.scrollIntoView({ behavior: 'smooth' });
  };

  // 상태
  state = {
    isShow: false,
  };

  // 메서드
  handleScrollDetection = () => {
    window.scrollY > this.props.changeModePosition
      ? this.setState({
          isShow: true,
        })
      : this.setState({
          isShow: false,
        });
  };

  // 라이프 사이클 훅
  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollDetection);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollDetection);
  }

  // 렌더링
  render() {
    // 클래스 속성 병합
    const combineClassNaems = classNames(
      'goToTop',
      this.state.isShow ? 'is-show' : ''
    );

    return (
      <AppButton
        aria-label="페이지 상단 이동"
        className={combineClassNaems}
        onClick={GoToTop.handleGoToTop}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m32 56c1.104 0 2-.896 2-2v-39.899l14.552 15.278c.393.413.92.621 1.448.621.495 0 .992-.183 1.379-.552.8-.762.831-2.028.069-2.828l-16.619-17.448c-.756-.755-1.76-1.172-2.829-1.172s-2.073.417-2.862 1.207l-16.586 17.414c-.762.8-.731 2.066.069 2.828s2.067.731 2.828-.069l14.551-15.342v39.962c0 1.104.896 2 2 2z" />
        </svg>
      </AppButton>
    );
  }
}

export default GoToTop;
