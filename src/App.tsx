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

  return (
    <>
      <GlobalStyles />
      <Header />
      <div style={styles.pageContainer}>
        <Routes>
          <Route path="/" element={isMobile ? <MobileHomePage /> : <HomePage />} />
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
      </div>
      <Footer />
    </>
  );
}

// 중앙 정렬 스타일 (React.CSSProperties 타입으로 명시)
const styles: { pageContainer: React.CSSProperties } = {
  pageContainer: {
    display: 'flex',/*  */
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //minHeight: '100vh', // 화면의 최소 높이를 100%로 설정하여 모든 콘텐츠가 화면에 맞게 중앙에 위치하도록 함
  }
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
