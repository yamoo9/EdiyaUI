import 'react-app-polyfill/ie11';
import 'styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/App/App';

ReactDOM.render(<App />, document.getElementById('reactApp'));

// 앱을 오프라인에서 작동시키고 보다 빠르게 로드 하고자 한다면?
// 아래 코드의 unregister()를 register()로 변경합니다.
// [⚠️주의! 이 방법은 몇 가지 문제를 발생할 수 있습니다.]
// 서비스 워커에 대해 자세히 알아보기: https://bit.ly/CRA-PWA
if (process.env.NODE_ENV === 'production') {
  // serviceWorker.register();
  // 동적으로 import() 구문을 사용해 모듈을 로드
  // 모듈이 성공적으로 로드되면 PWA로 등록합니다.
  import('~/config/serviceWorker')
    .then((serviceWorker) => serviceWorker.register())
    .catch(({ message }) => console.error(message));
}
