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
import Icon_mobile_app_store from "../../assets/images/mobile/icon_mobile_app_store.svg"
import Icon_mobile_section1_bottom from "../../assets/images/mobile/icon_mobile_section1_bottom.svg"

// 아이콘 import
import IconAsian from "../../assets/images/mobile/food-icons/icon_mobile_asian.svg";
import IconChicken from "../../assets/images/mobile/food-icons/icon_mobile_chicken.svg";
import IconChinese from "../../assets/images/mobile/food-icons/icon_mobile_chinese_food.svg";
import IconGokbap from "../../assets/images/mobile/food-icons/icon_mobile_gokbap.svg";
import IconHamburger from "../../assets/images/mobile/food-icons/icon_mobile_hamburger.svg";
import IconJapanese from "../../assets/images/mobile/food-icons/icon_mobile_japanese_foog.svg";
import IconJokbal from "../../assets/images/mobile/food-icons/icon_mobile_jokbal.svg";
import IconKorean from "../../assets/images/mobile/food-icons/icon_mobile_korean_food.svg";
import IconMeet from "../../assets/images/mobile/food-icons/icon_mobile_meet.svg";
import IconPizza from "../../assets/images/mobile/food-icons/icon_mobile_pizza.svg";
import IconPub from "../../assets/images/mobile/food-icons/icon_mobile_pub.svg";
import IconSalad from "../../assets/images/mobile/food-icons/icon_mobile_salad.svg";
import IconSeafood from "../../assets/images/mobile/food-icons/icon_mobile_seafood.svg";
import IconSnack from "../../assets/images/mobile/food-icons/icon_mobile_snack_food.svg";
import IconWestern from "../../assets/images/mobile/food-icons/icon_mobile_western_foog.svg";


const MobileHomePage: React.FC = () => {
  document.body.style.backgroundColor = "#F5C622";
    document.body.style.margin = "0";

  const navigate = useNavigate();

    // 리스트 생성
    const foodList = [
        { name: "아시안", icon: IconAsian },
        { name: "치킨", icon: IconChicken },
        { name: "중식", icon: IconChinese },
        { name: "국밥", icon: IconGokbap },
        { name: "햄버거", icon: IconHamburger },
        { name: "일식", icon: IconJapanese },
        { name: "족발", icon: IconJokbal },
        { name: "한식", icon: IconKorean },
        { name: "고기", icon: IconMeet },
        { name: "피자", icon: IconPizza },
        { name: "술집", icon: IconPub },
        { name: "샐러드", icon: IconSalad },
        { name: "해산물", icon: IconSeafood },
        { name: "분식", icon: IconSnack },
        { name: "양식", icon: IconWestern },
    ];

  const handleRegisterClick = () => {
    navigate("/management/apply");
  };

  return (
      <>
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
              <span>
                점심에 고기는 해비하고 햄버거는 너무 인스턴트고 피자는 어제 먹었구 치킨도 지금 안땡기고 밥은 먹어야대는데 뭘 먹어야되ㄴ 아 맞다! 저녁에 뭐 먹는다 했으니까 그거도 빼고 아 대리님 다이어트 한다니까 분식은 안드시겠지..
              </span>
            </Section_1_footer>
        </Landing>
         <Section2>
             <MainConst>
                 먹고싶은건<br/>몰라도<br/>싫은건 알잖아?
             </MainConst>
             <SubConst>
                 안 땡기는거 어제 먹은거 좀 있다 먹을거 <br/> 다! 빼면서 지금 먹을걸 찾아볼까요?
             </SubConst>
             <FoodList>
                 {foodList.map((food, index) => (
                     <FoodItem key={index}>
                         <FoodImage src={food.icon} />
                         <FoodLabel>{food.name}</FoodLabel>
                     </FoodItem>
                 ))}
             </FoodList>
         </Section2>
      </>
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
    display: grid;
    place-items: center; 

    padding: 15px;
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
`;

const Section2 = styled.div`
    height: auto;
    background-image: url('/images/icon_mobile_section2_bg.svg');
    background-color: #f5c622;
    background-size: 60%;
    background-position: 90% 65%;
    background-repeat: no-repeat;
`

const FoodList = styled.div`
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    padding: 10px;
    gap: 25px;
    margin-top: 250px;
    padding-left: 20px;

    /* 스크롤바 숨기고 싶을 때 (옵션) */
    -ms-overflow-style: none; /* IE, Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari */
    }
`

const FoodItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;  /* 너비 고정 */
`

const FoodImage = styled.img`
  width: 80px;
  height: 80px;
  background-color: #D8A82D;
  border-radius: 20px;
`

const FoodLabel = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: #333;
`