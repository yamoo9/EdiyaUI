import './GoToTop.scss';
import React, { Component } from 'react';
import { ReactComponent as Icon } from '@assets/go-to-top.svg';
import UiButton from '@components/UiButton/UiButton';

// SVG Icon 컴포넌트 이름 설정
Icon.displayName = 'SVGIcon';

/**
 * @class
 */
class GoToTop extends Component {
  // 컴포넌트 상태
  state = {
    isShow: false,
  };

  // 이벤트 핸들러
  handleGoToTop = (e) => {
    document.documentElement.scrollIntoView({ behavior: 'smooth' });
    e.preventDefault();
    e.stopPropagation();
  };

  handleScrollToggleGoToTop = (e) => {
    const { scrollY } = window;
    const { targetSelector } = this.props;
    const targetDomNode = document.querySelector(targetSelector);
    if (scrollY > targetDomNode.getBoundingClientRect().y) {
      this.setState({
        isShow: true,
      });
    }
    else {
      this.setState({
        isShow: false,
      });
    }
  };

  // 렌더링
  render() {
    const { width, height, label } = this.props;
    const { isShow } = this.state;

    return (
      <UiButton
        className={`GoToTop ${isShow ? 'is-show' : ''}`.trim()}
        aria-label={label}
        onClick={this.handleGoToTop}
      >
        <Icon
          aria-hidden="true"
          style={{
            width,
            height,
          }}
        />
      </UiButton>
    );
  }

  // 라이프 사이클 훅
  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollToggleGoToTop);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollToggleGoToTop);
  }
}

export default GoToTop;
