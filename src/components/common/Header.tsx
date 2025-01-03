import React from "react";
import styled from "styled-components";
import AppDownloadButton from "../../assets/images/appDownloadBtn.png";
import MainLogo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  margin: 0 10rem;
`;

const Logo = styled.img`
  width: 80px;
  height: 110px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: auto;
  height: 48px;

  a, div {
    margin: 0 1rem;
    color: #525250;
    font-size: 17px;
    font-weight: bold;
    text-decoration: none;
    transition: transform 0.2s ease-in-out;
  }

  a:hover, a.active {
    transform: scale(1.1);
    color: white;
    font-weight: 900;
  }
`;

const AppDownloadBtn = styled.img`
  width: 140px;
  height: 48px;
  margin-left: 7px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Header: React.FC = () => {
  const location = useLocation();

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
    <HeaderContainer>
      <Link to="/">
        <Logo src={MainLogo} />
      </Link>
      <Nav>
        <Link to="/" className={isActive("/") ? "active" : ""}>
          서비스 소개
        </Link>
        <Link to="/management" className={isActive("/management") ? "active" : ""}>
          사장님 가게관리
        </Link>
        <Link to="/contact" className={isActive("/contact") ? "active" : ""}>
          문의하기
        </Link>
        <div>|</div>
        <AppDownloadBtn src={AppDownloadButton} />
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
