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
  return (
    <SocialLoginContainer>
        <SocialLoginBtn className="kakaoBtn">
          <SocialLogo src={kakaoLogo} className="kakaoLogo"/>
          <SocialTitle>카카오로 계속하기</SocialTitle>
        </SocialLoginBtn>
        <SocialLoginBtn className="naverBtn">
          <SocialLogo src={naverLogo} className="naverLogo"/>
          <SocialTitle>네이버로 계속하기</SocialTitle>
        </SocialLoginBtn>
        <SocialLoginBtn className="appleBtn">
          <SocialLogo src={appleLogo} className="appleLogo"/>
          <SocialTitle>애플로 계속하기</SocialTitle>
        </SocialLoginBtn>
      </SocialLoginContainer>
  )
}

export default SocialLoginComponent;