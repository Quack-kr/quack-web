import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SocialLoginComponent from "../../components/SocialLoginCompoent";

const SignInPage: React.FC = () => {
  return (
    <LoginContainer>
      <LoginTitle>로그인</LoginTitle>
      <LoginSubTitle>간편하게 소셜로그인으로 가입해 보세요</LoginSubTitle>
      <SocialLoginComponent />
      <RegisterTitle>아직 가입하지 않으셨다면!</RegisterTitle>
      <RegisterLink to="/management/signup">회원가입</RegisterLink>
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 300px 0;
`;

const LoginTitle = styled.div`
  font-size: 2rem;
  color: #EFEEDF;
  font-weight: bold;
  margin-bottom: 12px;
`

const LoginSubTitle = styled.div`
  font-size: 1rem;
  color: #A8A7A1;
  font-weight: bold;
`

const RegisterTitle = styled.div`
  font-size: 16px;
  color: #EFEEDF;
`
const RegisterLink = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  color: #EFEEDF;
  text-decoration: underline;
  margin-top: 2px;
`

export default SignInPage;



