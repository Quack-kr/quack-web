import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './assets/css/GlobalStyles';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage/HomePage';
import ManagementPage from './pages/ManagementPage/ManagementPage';
import ContactPage from './pages/ContactPage/ContactPage';
import LoginPage from './pages/SignInPage/SignIn';
import SignUpPage from './pages/SignUpPage/SignUp';
import ApplyPage from './pages/ApplyPage/ApplyPage';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      {/* 라우터를 정의하는 Routes */ }
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* 기본 홈 */}
        <Route path="/management" element={<ManagementPage />} /> {/* 사장님 가게관리 페이지 */}
        <Route path="/contact" element={<ContactPage />} /> {/* 문의하기 페이지 */}
        <Route path="/management/signin" element={<LoginPage />}  /> {/* 로그인 페이지 */}
        <Route path="/management/signup" element={<SignUpPage/>} /> {/* 회원가입 페이지 */}
        <Route path="/management/apply" element={<ApplyPage/>} /> {/* 온라인 입점신청 페이지 */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
