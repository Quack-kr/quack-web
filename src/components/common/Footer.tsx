import React from "react";
import styled from "styled-components";
import MainLogo from "../../assets/images/logo.png";

const FooterWrapper = styled.div`
  width: 3356px;
  height: 330px;
  background-color: #171714;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterContainer = styled.footer`
  text-align: center;
  margin-top: 50px;
  width: 1250px;
  height: 91px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

const CompanyInformationContainer = styled.div`
  width: 600px;
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
  color: #A8A7A1;
  font-size: 14px;
  word-spacing: 5px;
  font-weight: bold;
`;

const Logo = styled.img`
  width: 100px;
  height: 160px;
  margin-top: 18px;
  margin-right: -180px;
`

const Footer: React.FC = () => (
  <FooterWrapper>
    <FooterContainer>
      <Logo src={MainLogo} />
      <CompanyInformationContainer>
        <Title>꽥 플레이스</Title>
        <Text>사업자 등록번호: 721-04-03645</Text>
        <Text>
          주소: 경기도 남양주시 와부읍 수레로116번길 16,
          402호-J186호(아이비타워-2)
        </Text>
        <Text>문의사항: quack0410@naver.com</Text>
      </CompanyInformationContainer>
      <CopyRightContainer>
        <Title>개인정보처리방침 | 꽥 서비스 이용약관</Title>
        <Text>Copyright Ⓒ quack. All rights reserved. </Text>
      </CopyRightContainer>
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
