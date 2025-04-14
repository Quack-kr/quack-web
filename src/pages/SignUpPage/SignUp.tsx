import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SocialLoginComponent from "../../components/SocialLoginCompoent";

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 300px 0;
`;

const RegisterTitle = styled.div`
  font-size: 2rem;
  color: #EFEEDF;
  font-weight: bold;
  margin-bottom: 10px;
`

const RegisterSubTitle = styled.div`
  font-size: 1rem;
  color: #A8A7A1;
  font-weight: bold;
`

const LoginTitle = styled.div`
  font-size: 16px;
  color: #EFEEDF;
`
const LoginLink = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  color: #EFEEDF;
  text-decoration: underline;
  margin-top: 2px;
`

const SignUpPage: React.FC = () => {
  return (
    <RegisterContainer>
      <RegisterTitle>회원가입</RegisterTitle>
      <RegisterSubTitle>간편하게 소셜로그인으로 가입해 보세요</RegisterSubTitle>
      <SocialLoginComponent />
      <LoginTitle>이미 계정이 있으시다면?</LoginTitle>
      <LoginLink to="/management/signin">로그인</LoginLink>
    </RegisterContainer>
  )
}

export default SignUpPage;



