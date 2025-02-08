import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem;
  margin-top: 150px;
`;

const Text = styled.div`
  color: #68675E;
`

const Footer: React.FC = () => (
  <FooterContainer>
    <Text>사업자 등록번호: 120-88-01280 | 대표 : 홍길동</Text>
    <Text>호스팅 서비스: 주식회사 꽥 | 통신판매업 신고번호 : 2014-서울강남-03377 사업자정보확인</Text>
    <Text>06236 서울특별시 강남구 테헤란로 142, 4층, 10층, 11층, 12층, 13층, 22층, 12층(역삼동, 아크플레이스)</Text>
    <Text>고객센터 : 서울특별시 강남구 테헤란로 133, 9층(역삼동, 한국타이어빌딩)</Text>
  </FooterContainer>
);

export default Footer;
