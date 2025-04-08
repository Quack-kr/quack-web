import React from "react";
import styled from "styled-components";
//import AppDownloadButton from "../../assets/images/appDownloadBtn.png";
import MainLogo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";

const HeaderWrapper = styled.div<{ $isRoot: boolean }>`
  width: 1440px;
  height: 200px;
  background-color: #171714;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $isRoot }) => ($isRoot ? "#F5C622" : "transparent")};
`;

const HeaderContainer = styled.header`
  top: 0;
  z-index: 1000;
  width: 100%;
  max-width: 1000px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img<{ $isRoot: boolean }>`
  width: auto;
  height: auto;

  ${({ $isRoot }) =>
    !$isRoot &&
    `
      filter: brightness(0) saturate(100%) invert(94%) sepia(10%) saturate(217%) hue-rotate(16deg) brightness(96%) contrast(87%);
    `}
`;

const Nav = styled.nav<{ $isRoot: boolean }>`
  display: flex;
  align-items: center;
  width: auto;
  height: 48px;

  a,  div {
    margin: 0 1rem;
    color: ${({ $isRoot }) => ($isRoot ? "#070706" : "#525250")};
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    transition: transform 0.2s ease-in-out;
  }

  a:hover,
  a.active {
    transform: scale(1.1);
    color: white;
    font-weight: 900;
  }
`;

const AppDownloadBtn = styled.div<{ $isRoot: boolean }>`
  width: 140px;
  height: 48px;
  margin-left: 7px;
  border-radius: 15px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  background-color: ${({ $isRoot }) => ($isRoot ? "#070706" : "#EFD800")};
  color: ${({ $isRoot }) => ($isRoot ? "#F5C622" : "#070706")} !important;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }
`;

const Header: React.FC = () => {
  const location = useLocation();
  const isRoot = location.pathname === "/";

  // 활성화 여부 확인 함수
  const isActive = (path: string) => {
    if (path === "/") {
    // 서비스 소개는 정확히 루트 경로일 때만 활성화
    return location.pathname === "/";
  }
  // 나머지 항목들은 경로를 포함하고 있으면 활성화
  return location.pathname.includes(path);
  }

  return (
    <HeaderWrapper $isRoot={isRoot}>
      <HeaderContainer>
        <Link to="/">
          <Logo src={MainLogo} $isRoot={isRoot} />
        </Link>
        <Nav $isRoot={isRoot}>
          <Link to="/" className={isActive("/") ? "active" : ""}>
            서비스 소개
          </Link>
          <Link
            to="/management"
            className={isActive("/management") ? "active" : ""}
          >
            사장님 가게관리
          </Link>
          <Link to="/contact" className={isActive("/contact") ? "active" : ""}>
            문의하기
          </Link>
          <div>|</div>
          {/*<AppDownloadBtn src={AppDownloadButton}/>*/}
          <AppDownloadBtn $isRoot={isRoot}>앱 다운로드</AppDownloadBtn>
        </Nav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
