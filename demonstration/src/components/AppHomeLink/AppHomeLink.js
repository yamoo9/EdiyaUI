import './AppHomeLink.scss';
import React from 'react';

const AppHomeLink = (props) => {
  // unknown-prop 오류 발생 시, 문제 해결 (http://bit.ly/2UMt6XG)
  const { external, children: content, ...domProps } = props;

  // external 조건 처리 후, JSX 코드 분기
  const Link = !external ? (
    <a className="appHeader__homeLink" {...domProps}>{content}</a>
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
