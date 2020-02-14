# Ediya UI 실습 러닝 가이드

HTML, CSS, JavaScript, DOM API 순수 웹 기술로 작성된 UI를 React App으로 재구성하는 실습을 진행합니다.

## 목차

1. [프로젝트 생성](#1-프로젝트-생성) 
1. [환경 구성 파일 이름 변경](#2-환경-구성-파일-이름-변경) 
1. [Public 디렉토리 에셋 교체 (덮어쓰기)](#3-public-디렉토리-에셋-교체-덮어쓰기) 
1. [검색앤진 최적화 / 오픈 그래프 프로토콜](#4-검색앤진-최적화--오픈-그래프-프로토콜)   
1. [API 디렉토리 이동](#5-api-디렉토리-이동) 
1. [AppHeader 컨텍스트](#6-appheader-컨텍스트)   
1. [App 컴포넌트 ← AppHeader](#7-app-컴포넌트-←-appheader)   
1. [AppHeader 컴포넌트](#8-appheader-컴포넌트)   
1. [AppHomeLink 컴포넌트](#9-apphomelink-컴포넌트)   
1. [AppNavigation 컴포넌트](#10-appnavigation-컴포넌트)   
1. [UiButton 컴포넌트](#11-uibutton-컴포넌트)   
1. [AppMain 컨텍스트](#12-appmain-컨텍스트)   
1. [App 컴포넌트 ← AppMain](#13-app-컴포넌트-←-appmain)   
1. [AppMain 컴포넌트](#14-appmain-컴포넌트)   
1. [BeverageList 컴포넌트](#15-beveragelist-컴포넌트)   
1. [BeverageItem 컴포넌트](#16-beverageitem-컴포넌트)   
1. [App 컴포넌트 ← GoToTop](#17-app-컴포넌트-←-gototop)   
1. [GoToTop 컴포넌트](#18-gototop-컴포넌트)   
1. [App 컴포넌트 ← AnimateWrapper](#19-app-컴포넌트-←-animatewrapper)   
1. [AnimateWrapper 컴포넌트](#20-animatewrapper-컴포넌트)   
1. [GitHub Pages 설정 및 배포](#21-github-pages-배포)   
1. [GitHub 배포](#21-3-배포)     

## 1. 프로젝트 생성

[cra-template-ko-craco](https://www.npmjs.com/package/cra-template-ko-craco) 템플릿을 사용해 새로운 실습 프로젝트를 생성합니다.

```sh
$ npx create-react-app --template cra-template-ko-craco demonstration
```

## 2. 환경 구성 파일 이름 변경

`env` 파일 이름을 `.env`로 변경합니다.

```dotenv
SASS_PATH=node_modules:src
```

Windows 플랫폼 사용자는 다음과 같이 코드를 변경해야 합니다.

```dotenv
SASS_PATH=./node_modules;./src 
```

## 3. Public 디렉토리 에셋 교체 (덮어쓰기)

[예제 압축 파일](https://github.com/yamoo9/EdiyaUI/raw/master/Web%20%E2%86%92%20ReactApp.begin.zip)을 푼 후, `public` 디렉토리 안의 다음 파일을 프로젝트 `public` 디렉토리로 복사, 붙여넣어 덮어쓰기 합니다.

- favicon.png
- logo192.png
- logo512.png
- manifest.json
- og-image.jpg

## 4. 검색앤진 최적화 / 오픈 그래프 프로토콜

[검색엔진 최적화(SEO)](https://static.googleusercontent.com/media/www.google.com/ko//intl/ko/webmasters/docs/search-engine-optimization-starter-guide-ko.pdf), [오픈 그래프(Open Graph) 프로토콜](https://ogp.me/)를 서비스 콘텐츠에 맞게 변경 입력합니다.

- 타이틀: `title`
- 설명: `description`
- 키워드: `keywords`
- 오픈 그래프 타이틀: `og:title`
- 오픈 그래프 설명: `og:description`

### ♟ public/index.html

HTML 파일을 열어 콘텐츠를 다음과 같이 변경합니다.

```html
<title>이디야(Ediya) UI ← React 실습</title>

<!-- 검색 엔진 최적화(SEO) -->
<meta 
  name="description" 
  content="이듬 블렌디드 러닝 '이디야(Ediya) UI ← React 실습' 시연으로 제작한 결과물입니다." 
/>
<meta 
  name="keywords"
  content="웹, 웹 개발, 프론트엔드, 프론트엔드 개발, UI, 접근성, 블렌디드러닝, 이듬, 이디야, Ediya, React" 
/>

<!-- 오픈 그래프 프로토콜(Open Graph Protocol) -->
<meta
  property="og:title"
  content="이디야(Ediya) UI ← React 실습" 
/>
<meta
  property="twitter:title"
  content="이디야(Ediya) UI ← React 실습" 
/>
<meta
  property="og:description" 
  content="이듬 블렌디드 러닝 '이디야(Ediya) UI ← React 실습' 시연으로 제작한 결과물입니다."
/>
```

## 5. API 디렉토리 이동

예제 압축 파일에서 `api` 디렉토리를 복사하여 프로젝트 `src` 디렉토리 안에 붙여넣기 합니다.
`api` 디렉토리 안에는 이디야 UI의 데이터가 구성 된 `ediya.json` 파일이 포함되어 있습니다.

```sh
src/
 └── api/
      └── ediya.json
```

💡실습에 필요한 데이터는 `navigation`과 `beverage_menu` 입니다.

```js
{
	"version": "0.0.4",
	"author": "yamoo9",
	"email": "yamoo9@naver.com",
	"navigation": { 
    // 데이터
  },
	"beverage_menu": [
    // 데이터
  ]
}
```

## 6. AppHeader 컨텍스트

`context/AppHeaderContext.js` 파일을 생성한 후, 컨텍스트를 생성하여 내보내는 코드를 작성합니다.

### ♟ src/context/AppHeaderContext.js

```js
import { createContext } from 'react';
import { navigation } from '@api/ediya.json';

export const navigationData = { ...navigation };
export default createContext(navigationData);
```

## 7. App 컴포넌트 ← AppHeader

`AppHeaderContext` 모듈을 불러와 `AppHeader` 컴포넌트에 데이터를 공급합니다.

### ♟ src/components/App/App.js

```jsx
import React from 'react';
import AppHeaderContext, { navigationData } from '@context/AppHeaderContext';
import AppHeader from '@components/AppHeader/AppHeader';

const App = () => {
  return (
    <AppHeaderContext.Provider value={navigationData}>
      <AppHeader />
    </AppHeaderContext.Provider>
  );
};

export default App;
```

## 8. AppHeader 컴포넌트

`AppHomeLink`, `AppNavigation` 컴포넌트를 포함하는 `AppHeader` 컴포넌트 코드를 작성합니다. 

### ♟ src/components/AppHeader/AppHeader.js

```jsx
import './AppHeader.scss';
import React from 'react';

import AppHomeLink from '@components/AppHomeLink/AppHomeLink';
import AppNavigation from '@components/AppNavigation/AppNavigation';


const AppHeader = () => {
  return (
    <header className="appHeader">

      {/* 홈 링크 */}
      <AppHomeLink
        href="https://www.ediya.com"
        title="홈 페이지로 이동"
        external={true}
      >
        <span className="a11yHidden" lang="en">EDIYA COFFEE</span>
      </AppHomeLink>

      {/* 내비게이션 메뉴 */}
      <AppNavigation />

    </header>
  );
};

export default AppHeader;
```

## 9. AppHomeLink 컴포넌트

`AppHomeLink` 컴포넌트를 작성합니다. DOM 표준 속성이 아닌, 커스텀 속성을 `props`로 전달 할 경우 [`unknown-prop` 오류 발생](http://bit.ly/2UMt6XG)을 경험한 후, 해결 방법에 대해 정리해봅니다.

### ♟ src/components/AppHomeLink/AppHomeLink.js

```jsx
import './AppHomeLink.scss';
import React from 'react';

const AppHomeLink = (props) => {
  // unknown-prop 오류 해결 방법 (권장)
  const { external, children: content, ...domProps } = props;

  // external 조건 처리 후, JSX 코드 분기
  const Link = !external ? (
    <a 
      className="appHeader__homeLink" 
      {...domProps}
    >{content}</a>
  ) : (
    <a
      className="appHeader__homeLink"
      {...domProps}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );

  // 렌더링
  return <h1 className="appHeader__brand">{Link}</h1>;
};

export default AppHomeLink;
```

## 10. AppNavigation 컴포넌트

`AppNavigation` 컴포넌트는 클래스 컴포넌트로 생성합니다. 컴포넌트 상태(State)가 필요하고 컨텍스트 타입(Context Type)을 사용하기 때문입니다. 뿐만 아니라 [React.Fragment](https://ko.reactjs.org/docs/fragments.html)와 [React.createRef](https://ko.reactjs.org/docs/react-api.html#reactcreateref)를 사용합니다.

일반적으로 React App은 선언된 상태를 통해 UI를 업데이트 합니다. 하지만, 상황에 따라 DOM 요소에 직접 접근하여 조작해야 할 경우도 있습니다. 뿐만 아니라, 특정 조작의 경우 타임아웃(timeout)을 활용해야 할 수도 있습니다. 애니메이션 부분 실습에서 다뤄봅니다.

### ♟ src/components/AppNavigation/AppNavigation.js

```jsx
import './AppNavigation.scss';
import React, { Component, Fragment, createRef } from 'react';
import UiButton from '@components/UiButton/UiButton';
import AppHeaderContext from '@context/AppHeaderContext';

/**
 * @class
 */
class AppNavigation extends Component {
  // 컨텍스트 설정
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
```

## 11. UiButton 컴포넌트

`UiButton` 컴포넌트는 HTML 버튼 요소를 래핑한 컴포넌트로 프로젝트 곳곳에서 재사용 됩니다.
재사용 되는 컴포넌트의 경우, 외부에서 컴포넌트 사용 시 다양한 경우에 대응할 수 있도록 고려하여야 합니다.

예를 들어 외부에서 컴포넌트를 참조할 수 있도록 [React.forwardRef](https://ko.reactjs.org/docs/react-api.html#reactforwardref)를 사용하는 것이 그러합니다.
뿐만 아니라, 외부에서 전달 받은 속성(props)을 합치는 부분도 고려해야 합니다.

### ♟ src/components/UiButton/UiButton.js

```jsx
import React, { forwardRef } from 'react';
import classNames from 'classnames';

// 포워드 참조 컴포넌트
const forwardRefComponent = (props, ref) => {
  const { className, ...domProps } = props;
  const classes = classNames('UiButton resetButton', className);
  return (
    <button ref={ref} className={classes} {...domProps}>
      {props.children || '버튼 콘텐츠를 입력하세요.'}
    </button>
  );
};

// 컴포넌트 표시 이름 설정
forwardRefComponent.displayName = 'UiButton';

// ref 포워딩
const UiButton = forwardRef(forwardRefComponent);

// 컴폰넌트 기본 값 설정
UiButton.defaultProps = {
  type: 'button',
};

export default UiButton;
```

## 12. AppMain 컨텍스트

`context/AppMainContext.js` 파일을 생성한 후, 컨텍스트를 생성하여 내보내는 코드를 작성합니다.

### ♟ src/context/AppMainContext.js

```js
import { createContext } from 'react';
import { beverage_menu } from '@api/ediya.json';

export const beverageData = [...beverage_menu];
export default createContext(beverageData);
```

## 13. App 컴포넌트 ← AppMain

`AppMainContext` 모듈을 불러온 후, `AppMain` 컴포넌트에 데이터를 공급하는 코드를 작성합니다.

### ♟ src/components/App/App.js

```jsx
import React from 'react';

import AppMainContext, { beverageData } from '@context/AppMainContext';
import AppMain from '@components/AppMain/AppMain';


const App = () => {
  return (
    <AppHeaderContext.Provider value={navigationData}>
      <AppHeader />
    </AppHeaderContext.Provider>
    
    {/* 앱 메인 */}
    <AppMainContext.Provider value={beverageData}>
      <AppMain />
    </AppMainContext.Provider>
  );
};

export default App;
```

## 14. AppMain 컴포넌트

`BeverageList` 컴포넌트를 포함하는 `AppMain` 컴포넌트 코드를 작성합니다.

### ♟ src/components/AppMain/AppMain.js

```jsx
import './AppMain.scss';
import React from 'react';
import BeverageList from '@components/BeverageList/BeverageList';

const AppMain = () => {
  return (
    <main className="appMain">
      <h2 className="a11yHidden">이디야 음료</h2>
      <BeverageList />
    </main>
  );
};

export default AppMain;
```

## 15. BeverageList 컴포넌트

`BeverageItem` 컴포넌트를 포함하는 `BeverageList` 컴포넌트 코드를 작성합니다. 
`BeverageList` 컴포넌트는 자체 상태를 가지진 않지만, 컨텍스트 타입을 사용하므로 클래스 컴포넌트로 작성합니다.

### ♟ src/components/BeverageList/BeverageList.js

```jsx
import './BeverageList.scss';
import React, { Component } from 'react';
import AppMainContext from '@context/AppMainContext';
import BeverageItem from '@components/BeverageItem/BeverageItem';

class BeverageList extends Component {
  static contextType = AppMainContext;

  render() {
    const list = this.context;
    return (
      <ul className="beverageList resetList">
        {list.map((item) => <BeverageItem key={item.id} item={item} />)}
      </ul>
    );
  }
}

export default BeverageList;
```

## 16. BeverageItem 컴포넌트

`BeverageItem` 컴포넌트는 컼포넌트 상태, DOM 객체 참조(ref)가 필요하므로 클래스 컴포넌트로 작성합니다.
주의 깊게 살펴 볼 부분은 접근성 준수를 목적으로 컴포넌트 상태가 변경 될 때 마다, WAI-ARIA 상태 또한 변경해야 합니다.

### ♟ src/components/BeverageItem/BeverageItem.js

```jsx
import './BeverageItem.scss';
import React, { Component, Fragment, createRef } from 'react';
import UiButton from '@components/UiButton/UiButton';


class BeverageItem extends Component {
  
  // 컴포넌트 상태
  state = {
    isExpand: false,
  };

  // 다이얼로그 DOM 객체 참조
  dialog = createRef(null);

  // 이벤트 핸들러
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


  // 렌더링
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
```

## 17. App 컴포넌트 ← GoToTop

`GoToTop` 컴포넌트를 사용하는 코드를 작성합니다.

### ♟ src/components/App/App.js

```jsx
import React from 'react';
// ...
import GoToTop from '@components/GoToTop/GoToTop';

const App = () => {
  return (
    <AppHeaderContext.Provider value={navigationData}>
      <AppHeader />
    </AppHeaderContext.Provider>
    <AppMainContext.Provider value={beverageData}>
      <AppMain />
    </AppMainContext.Provider>
    <GoToTop
      label="페이지 상단으로 이동"
      width="36"
      height="36"
      targetSelector=".beverageList"
    />
  );
};

export default App;
```

## 18. GoToTop 컴포넌트

`GoToTop` 컴포넌트는 컼포넌트 상태, 라이브 사이클 훅 사용이 필요하므로 클래스 컴포넌트로 작성합니다.
주의 깊게 살펴 볼 부분은 특정 시점에 따라 이벤트를 추가하고, 제거하기 위해 라이브 사이클 훅을 사용한 부분입니다.

### ♟ src/components/GoToTop/GoToTop.js

```jsx
import './GoToTop.scss';
import React, { Component } from 'react';
import { ReactComponent as Icon } from '@assets/go-to-top.svg';
import UiButton from '@components/UiButton/UiButton';

// SVG Icon 컴포넌트 이름 설정
Icon.displayName = 'SVGIcon';


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
```

## 19. App 컴포넌트 ← AnimateWrapper

앱 로드 시, UI 애니메이션을 처리하는 스위치 역할을 하는 `AnimateWrapper` 컴포넌트를 추가하는 코드를 작성합니다.

### ♟ src/components/App/App.js

```jsx
import React from 'react';
import AnimateWrapper from '@components/AnimateWrapper/AnimateWrapper';
// ...

const App = () => {
  return (
    <AnimateWrapper animate>
      <AppHeaderContext.Provider value={navigationData}>
        <AppHeader />
      </AppHeaderContext.Provider>
      <AppMainContext.Provider value={beverageData}>
        <AppMain />
      </AppMainContext.Provider>
      <GoToTop
        label="페이지 상단으로 이동"
        width="36"
        height="36"
        targetSelector=".beverageList"
      />
    </AnimateWrapper>
  );
};

export default App;
```

## 20. AnimateWrapper 컴포넌트

외부로부터 전달 받은 `animate` 속성 값의 참/거짓 유무에 따라 애니메이션을 설정하는 코드를 작성합니다.

### ♟ src/components/AnimateWrapper/AnimateWrapper.js

```jsx
import React, { Fragment } from 'react';

const AnimateWrapper = ({ animate, children }) =>
  animate ? (
    <div role="group" className="animate">{children}</div>
  ) : (
    <Fragment>{children}</Fragment>
  );

AnimateWrapper.defaultProps = {
  animate: false,
};

export default AnimateWrapper;
```

## 21. GitHub Pages 배포

자신의 GitHub 저장소에 `deploy` 명령어를 사용해 배포(production) 할 수 있도록 구성합니다.

### 21-1. gh-pages 패키지 설치

[GitHub Pages](https://pages.github.com/)에 명령어로 배포하려면 먼저 [gh-pages](https://www.npmjs.com/package/gh-pages) 패키지를 설치해야 합니다.

```bash
$ npm i gh-pages
```

### 21-2. package.json 스크립트 및 홈페이지 설정

`package.json` 파일에 다음 코드를 추가합니다. 
`deploy` 명령이 실행되면 `predeploy` 명령을 자동으로 실행하며, 
`homepage`에 등록된 GitHub 저장소에 배포됩니다.

```js
{
  "scripts": {
    // ...
    "predeploy": "npm run build",
    "deploy": "gh-pages -b master -d build -e docs"
  },
  "homepage": "https://{사용자계정}.github.io/{저장소이름}",
}
```

#### gh-pages 사용법

`gh-pages` CLI 사용법은 다음과 같습니다.

```sh
사용법: gh-pages [옵션]

옵션:
  -V, --version            버전 번호를 출력
  -d, --dist <dist>        모든 소스 파일의 기본(빌드) 디렉토리
  -s, --src <src>          게시 할 파일을 선택하는데 사용되는 패턴(기본값: "** / *")
  -b, --branch <branch>    푸시(push) 하려는 브랜치 이름(기본값: "gh-pages")
  -e, --dest <dest>        배포 할 저장소의 특정 디렉토리(루트 기준 → 기본값: ".")
  -a, --add                추가만 하고, 기존 파일은 제거하지 않음
  -x, --silent             원격 저장소 URL을 출력 안 함
  -m, --message <message>  커밋 메시지 (기본값: "업데이트")
  -g, --tag <tag>          커밋 할 태그 추가
  --git <git>              git 실행 파일 경로 (기본값: "git")
  -t, --dotfiles           닷(.)파일 포함
  -r, --repo <repo>        푸시하려는 원격 저장소 URL
  -p, --depth <depth>      복제 깊이 (기본값: 1)
  -o, --remote <name>      원격 저장소 이름 (기본값: "origin")
  -u, --user <address>     사용자의 이름과 이메일 (기본값은 git config). 형식은 "계정이름 <email@example.com>"
  -v, --remove <pattern>   주어진 패턴과 일치하는 파일 제거 (--add와 함께 사용하는 경우 무시). (기본: ".")
  -n, --no-push            커밋만 처리 (푸시 없음)
  -f, --no-history         새로운 커밋 강제 처리 (기록 없이)
  -h, --help               도움말 출력
```

### 21-3. 배포

`deploy` 명령을 실행하면 자동 빌드 처리 후, 원격 저장소의 `master` 브랜치 `docs` 디렉토리에 빌드 결과가 배포됩니다.

```bash
$ npm run deploy
```

#### Github Pages 설정

GitHub 원격 저장소 설정(Settings) → GitHub Pages 섹션에서 Source 항목 값을 
`master branch/docs folter`로 설정합니다. 설정이 완료되면 배포된 웹사이트를 확인할 수 있습니다.

> https://{계정이름}.github.io/{저장소이름}

✦ [yamoo9.github.io/EdiyaUI](https://yamoo9.github.io/EdiyaUI) ✦