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
import Icon_mobile_logo from "../../assets/images/icon_mobile_logo.svg"
import Icon_mobile_menu from "../../assets/images/icon_mobile_menu.svg"
import Icon_mobile_app_store from "../../assets/images/icon_mobile_app_store.svg"
import Icon_mobile_section1_bottom from "../../assets/images/icon_mobile_section1_bottom.svg"


const MobileHomePage: React.FC = () => {
  document.body.style.backgroundColor = "#F5C622";
    document.body.style.margin = "0";
  
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/management/apply");
  };

  return (
    <MobileHomePageContainer>
        <Header>
            <Image src={Icon_mobile_logo} width={"100px"} height={"80px"}/>
            <Image src={Icon_mobile_menu} width={"50px"} height={"50px"} />
        </Header>
        <Landing>
            <MainConst>
                싫어하는 걸<br/>싹 뺴고<br/>시작하자.
            </MainConst>
            <SubConst>
                배고픈 순간 먹고 싶은 음식은 떠오르지 않을 때<br/> 근데 먹기 싫은 건 딱! 알고 있을때<br/> 그때 사용하면 딱 좋을 거 같지 않아요?
            </SubConst>
            <ImageCenter>
                <Image src={Icon_mobile_app_store} width={"230px"} marginTop="320px"/>
            </ImageCenter>
            <Section_1_BottomImage src={Icon_mobile_section1_bottom} width={"380px"}/>
            <Section_1_footer>
                점심에 고기는 해비하고 햄버거는 너무 인스턴트고 피자는 어제 먹었구 치킨도 지금 안땡기고 밥은 먹어야대는데 뭘 먹어야되ㄴ 아 맞다! 저녁에 뭐 먹는다 했으니까 그거도 빼고 아 대리님 다이어트 한다니까 분식은 안드시겠지..
            </Section_1_footer>
        </Landing>

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

const Header = styled.div`
    display: flex;
    height: 120px;
    padding: 80px 40px 40px 40px;
    justify-content: space-between;
    align-items: center;
    background: #f5c622;
`

const Landing = styled.div`
    height: auto;
    background-image: url('/images/section1_1.svg');
    background-color: #f5c622;
    background-size: 70%;
    background-position: 70% 0%;
    background-repeat: no-repeat;
`

const MainConst = styled.div`
    padding: 40px 0px 0px 40px;
    color: #070706;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px; /* 125% */
`

const SubConst = styled.div`
    padding-left: 40px;
    color: #070706;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 140% */
`

const ImageCenter = styled.div`
    display: flex;
    justify-content: center;
`


const Section_1_footer = styled.div`
    display: flex;
    align-items: center;
    
    
    padding: 5px;
    background: #9C6D38;
    height: 65px;
    text-align: center;
    color: #F5C622;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;

    white-space: nowrap; 
    overflow: hidden;
`



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
  margin-top: ${({ marginTop }) => marginTop || "0px"};
    display: block;
`;

const Section_1_BottomImage = styled(Image)`
  //border-bottom: 1px solid #9C6D38;
`;

