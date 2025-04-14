import React from "react";
import styled from "styled-components";
import MainLogo from "../../assets/images/logo.png";

const FooterWrapper = styled.div`
  bottom: 0;
  z-index: 1000;
  width: 100vw;
  min-width: 1920px;
  height: 330px;
  background-color: #171714;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const FooterContainer = styled.footer`
  text-align: center;
  margin-top: 50px;
  width: 1920px;
  min-width: 1920px;
  height: 330px;
  padding: 40px 335px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  overflow: hidden;
  box-sizing: border-box;
`;

const CompanyInformationContainer = styled.div`
  width: 800px;
  height: 91px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`

const CopyRightContainer = styled.div`
  width: 350px;
  height: 91px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`

const Text = styled.div`
  color: #A8A7A1;
  font-size: 14px;
  word-spacing: 5px;
  font-weight: 400;
`

const Title = styled.div`
  a {
    color: #A8A7A1;
    font-size: 14px;
    word-spacing: 5px;
    font-weight: bold;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.img`
  width: auto;
  height: auto;
  margin-top: 18px;
  margin-right: 30px;
  filter: brightness(0) saturate(100%) invert(71%) sepia(3%) saturate(1073%)
    hue-rotate(12deg) brightness(88%) contrast(93%);
`;

const Footer: React.FC = () => (
  <FooterWrapper>
    <FooterContainer>
      <Logo src={MainLogo} />
      <CompanyInformationContainer>
        <Text>상호명: 꽥 | 사업자 등록번호: 721-04-03645 | 대표자: 김걸휘</Text>
        <Text>통신판매업 신고번호 : 2025-와부조안-0126</Text>
        <Text>주소: 경기도 남양주시 와부읍 수레로116번길 16,
        402호-J186호(아이비타워-2)</Text>
        <Text>문의사항: quack0410@naver.com | 010-4121-9833</Text>
      </CompanyInformationContainer>
      <CopyRightContainer>
        <Title>
          <a
            href="https://skitter-editor-255.notion.site/1c47fc0319a280b8ab47e88aba2cf3d9"
            target="_blank"
          >
            개인정보처리방침 | 꽥 서비스 이용약관
          </a>
        </Title>
        <Text>Copyright Ⓒ quack. All rights reserved. </Text>
      </CopyRightContainer>
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
