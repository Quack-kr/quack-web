import React, { useEffect } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyles from './assets/css/GlobalStyles';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage/HomePage';
import MobileHomePage from './pages/MobileHomePage/MobileHomePage'; // 모바일 전용 페이지
import ManagementPage from './pages/ManagementPage/ManagementPage';
import ContactPage from './pages/ContactPage/ContactPage';
import LoginPage from './pages/SignInPage/SignIn';
import SignUpPage from './pages/SignUpPage/SignUp';
import ApplyPage from './pages/ApplyPage/ApplyPage';
import styled from 'styled-components';
import Icon_mobile_logo from "./assets/images/icon_mobile_logo.svg"
import Icon_mobile_menu from "./assets/images/icon_mobile_menu.svg"
import MobileGlobalStyle from './assets/css/MobileGlobalStyle';

const MobileHomePageContainer = styled.div`
  width: 100%;
  max-width: 540px;
  background-color: #ffc6ff;
  font-family: TheJamsil5;
  overflow: hidden;
`;

const MobileHeader = styled.div`
    display: flex;
    height: 120px;
    padding: 80px 40px 40px 40px;
    justify-content: space-between;
    align-items: center;
    background: #f5c622;
`

const Image = styled.img<{
  width?: string;
  height?: string;
  translateX?: string;
  translateY?: string;
  marginTop?: string;
}>`
width: ${({ width }) => width || "auto"};
height: ${({ height }) => height || "auto"};
transform: translate(
  ${({ translateX }) => translateX || "0"},
  ${({ translateY }) => translateY || "0"}
);
margin-top: ${({ marginTop }) => marginTop || "0px"};
  display: block;
`;


function AppContent() {
  const location = useLocation();
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.backgroundColor = "#F5C622";
    } else {
      document.body.style.backgroundColor = "#171714"; // 다른 페이지는 이 색으로
    }
  }, [location.pathname]);

  if (isMobile) {
    return (
      <>
        <MobileGlobalStyle />
        <MobileHomePageContainer>
          <MobileHeader>
              <Image src={Icon_mobile_logo} width={"100px"} height={"80px"}/>
              <Image src={Icon_mobile_menu} width={"50px"} height={"50px"} />
          </MobileHeader>
          <div>
          <Routes>
            <Route path="/" element={<MobileHomePage />} />
          </Routes>
          </div>
        </MobileHomePageContainer>
      </>
    );
  }

  return (
    <>
      <GlobalStyles />
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/management" element={<ManagementPage />} />
          {/* 사장님 가게관리 페이지 */}
          <Route path="/contact" element={<ContactPage />} />
          {/* 문의하기 페이지 */}
          <Route path="/management/signin" element={<LoginPage />} />
          {/* 로그인 페이지 */}
          <Route path="/management/signup" element={<SignUpPage />} />
          {/* 회원가입 페이지 */}
          <Route path="/management/apply" element={<ApplyPage />} />
          {/* 온라인 입점신청 페이지 */}
        </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

