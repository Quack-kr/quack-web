import React from "react";
import styled from "styled-components";
import kakaoLogo from "../assets/images/kakaoLogo.png";
import naverLogo from "../assets/images/naverLogo.png";
import appleLogo from "../assets/images/appleLogo.png";

const SocialLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
`

const SocialLoginBtn = styled.button`
  width: 380px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  margin-bottom: 10px;
  cursor: pointer;

  &.kakaoBtn {
    background-color: #EFD800;
  }
  &.naverBtn, &.appleBtn {
    background-color: #EFEEDF;
  }
`
const SocialLogo = styled.img`
  margin-right: 5px;

  &.kakaoLogo {
    width: 19.63px;
    height: 17.23px;
  }
  &.naverLogo {
    width: 16.25px;
    height: 14.93px;
  }
  &.appleLogo {
    width: 15.97px;
    height: 19px;
  }
`

const SocialTitle = styled.div`
  font-size: 16px;
  color: #171714;
  font-weight: bold;
`

const SocialLoginComponent: React.FC = () => {
  const K_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const K_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;
  console.log(import.meta.env.VITE_KAKAO_REDIRECT_URI);
  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  }
  return (
    <SocialLoginContainer>
      <SocialLoginBtn className="kakaoBtn" onClick={handleKakaoLogin}>
        <SocialLogo src={kakaoLogo} className="kakaoLogo" />
        <SocialTitle>카카오로 계속하기</SocialTitle>
      </SocialLoginBtn>
      <SocialLoginBtn className="naverBtn">
        <SocialLogo src={naverLogo} className="naverLogo" />
        <SocialTitle>네이버로 계속하기</SocialTitle>
      </SocialLoginBtn>
      <SocialLoginBtn className="appleBtn">
        <SocialLogo src={appleLogo} className="appleLogo" />
        <SocialTitle>애플로 계속하기</SocialTitle>
      </SocialLoginBtn>
    </SocialLoginContainer>
  );
}

export default SocialLoginComponent;