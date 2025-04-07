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
  width: 100%;
  max-width: 540px;
  background-color: #ffc6ff;
  font-family: TheJamsil5;
  overflow: hidden;
`;
