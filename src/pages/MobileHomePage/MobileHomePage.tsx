import React, {useEffect} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Section1_1 from "../../assets/images/section1_1.png";
import Section1_2 from "../../assets/images/section1_2.png";
import Section2_1 from "../../assets/images/section2_1.png";
import Section2_2 from "../../assets/images/section2_2.png";
import Section3_1 from "../../assets/images/section3_1.png";
import Section3_2 from "../../assets/images/section3_2.png";
import Section4_1 from "../../assets/images/section4_1.png";
import Section4_2 from "../../assets/images/section4_2.png";
import Section4_3 from "../../assets/images/section4_3.png";
import Section5_1 from "../../assets/images/section5_1.png";
import Section5_2 from "../../assets/images/section5_2.png";
import Section5_3 from "../../assets/images/section5_3.png";
import AppleStoreBtn from "../../assets/images/apple_store_btn.png";

const MobileHomePage: React.FC = () => {
  document.body.style.backgroundColor = "#F5C622";
  
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/management/apply");
  };

  return (
    <MobileHomePageContainer>
      <span>Hello</span>
    </MobileHomePageContainer>
  );
}

export default MobileHomePage;

const MobileHomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 1920px;
  margin-top: 50px;
  background-color: #f5c622;
  font-family: TheJamsil5;
  overflow: hidden;
`;

const Section = styled.section<{ isRegister?: boolean; height?: string }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isRegister }) => (isRegister ? "center" : "flex-start")};
  background-color: #f5c622;
  width: 1920px;
  padding: 200px 335px 0px 335px;
  height: ${({ height }) => height || "980px"};
  overflow: hidden;
`;

const Title1 = styled.div`
  font-size: 80px;
  line-height: 100px;
  font-weight: 700;
  color: #070706;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 32px;
    font-weight: 700;
  }
`;
const Title2 = styled.div`
  font-size: 64px;
  line-height: 80px;
  font-weight: 700;
  color: #070706;
  margin-bottom: 20px;
`;
const Text = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  color: #070706;
  font-family: Pretendard;
`;

const RegisterBtn = styled.div`
  width: 200px;
  height: 72px;
  margin-top: 100px;
  margin-bottom: 20px;
  padding: 32px 16px;
  border-radius: 40px;
  font-weight: 700;
  font-size: 24px;
  color: #efeedf;
  background-color: #070706;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

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
  margin-top: ${({ marginTop }) => marginTop || "20px"};
`;